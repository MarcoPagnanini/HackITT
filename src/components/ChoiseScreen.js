import React from 'react'
import Chat from './Chat';
import {auth} from '../firebase.js'
import SendMessage from './SendMessage';
import Admin from './Admin';

function ChoiseScreen() {
    {auth.currentUser.uid === "OlfIeQ1XDwdkFxW47rFJld1RA8C2" ? (<Chat></Chat>) : (<Chat></Chat>)}
}

export default ChoiseScreen