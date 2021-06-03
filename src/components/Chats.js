import React, {useRef, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {ChatEngine} from "react-chat-engine";
import {firebaseConfig} from "../components/firebase";
import {useAuth} from '../context/AuthContext'
import axios from "axios";

function Chats(props) {
    const history = useHistory()
    const {user} = useAuth()
    const [loading, setLoading] = useState(true);
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], 'userPhoto.jpg', {type: 'image/jpeg'})
    }


    console.log(user.displayName)





    const handleLogout = async () => {
        await firebaseConfig.signOut()
        history.push('/')
    }

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id": process.env.CHATENGINE_PROJECT_ID,
                'user-name': user.email,
                'user-secret': user.uid,
            }
        }).then(() => {
            setLoading(false);
        }).catch(() => {
            let formData = new FormData();
            formData.append('email', user.email)
            formData.append('username', user.email)
            formData.append('secret', user.uid)
            getFile(user.photoURL).then((avatar) => {
                formData.append('avatar', avatar, avatar.name);
                axios.post('https://api.chatengine.io/users/', formData, {
                        headers: {'private-key': process.env.CHATENGINE_SECRET_ID}
                    }
                ).then(() => setLoading(false))

            })

        })

    }, [user, history]);

    if(!user|| loading) return 'Loading'


    return (
        <div className={"chats-page"}>
            <div className={"nav-bar"}>
                Let'z Chat
            </div>
            <div className="logout-tab" onClick={handleLogout}>
                Logout
            </div>

            <ChatEngine
                height="90vh"
                projectID={process.env.CHATENGINE_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
}

export default Chats;
