import { Button, Input } from '@mui/material'
import { db, auth } from '../firebase'
import React from 'react'
import firebase from 'firebase/compat/app';
import { useState } from 'react'
import '../App.css'

function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const {uid,photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }

  return (
    <div className='send-message'>
        <form onSubmit={sendMessage}>
            <Input value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder='Write a text...'/>
            <Button type='submit'>Send</Button>
        </form>
    </div>
  )
}

export default SendMessage