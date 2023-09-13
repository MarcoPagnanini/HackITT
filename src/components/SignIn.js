import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js'
import {Button} from '@mui/material';
import { GoogleOutlined } from '@ant-design/icons';

function SignIn() {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

    }
  return (
    <div>
        <Button onClick={signInWithGoogle}><GoogleOutlined /><p></p>Sign In</Button>
    </div>
  )
}

export default SignIn