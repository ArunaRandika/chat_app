import React from 'react';
import {GoogleOutlined,FacebookOutlined} from "@ant-design/icons";
import firebase from "firebase/app";
import {firebaseConfig} from './firebase'

function Login(props) {
    return (
        <div id={'login-page'}>
            <div id={'login-card'}>
                <h1>Let'z Chat!</h1>
                <div className="login-button google
              " onClick={()=>firebaseConfig.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined/>Sign In with Google
                </div>
                <br/>
                <br/>
                <div className="login-button facebook" onClick={()=>firebaseConfig.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined/>Sign In with Facebook
                </div>
            </div>


        </div>
    );
}

export default Login;
