import { Button, Input } from '@mui/material'
import { db, auth } from '../firebase'
import React from 'react'
import firebase from 'firebase/compat/app';
import { useState } from 'react'
import '../App.css'

function SendQuiz(props) {
    const [msg, setMsg] = useState('')
    const TypeQuiz = props.name;
    const Result = props.result;
    const points = props.points;
    const [quizResultFlag, setQuizResultFlag] = useState(false);

    const handleSendQuiz = () => {
        setQuizResultFlag(true)
       props.onQuizResult(quizResultFlag);
    };

    async function sendMessage(e) {
        setQuizResultFlag(true);
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        if(msg === Result){  
            await db.collection('Risposte').add({
                TypeQuiz: TypeQuiz,
                Punteggio: points,
                value: msg,
                photoURL,
                uid,
                author: auth.currentUser.displayName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setMsg('')
        }
        else{
            await db.collection('Risposte').add({
                TypeQuiz: TypeQuiz,
                Punteggio: 0,
                value: msg,
                photoURL,
                uid,
                author: auth.currentUser.displayName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setMsg('')
        }

        //Funzione aggiorna Punteggi ->
        await db.collection('users').doc(props.uid).update({
            punteggio: firebase.firestore.FieldValue.increment(points)
        })
    }

    return (
        <div className='send-message'>
            <form onSubmit={sendMessage}>
                <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Scrivi la risposta' />
                <Button type='submit' onClick={handleSendQuiz}>Invia Risposta</Button>
            </form>
        </div>
    )
}

export default SendQuiz