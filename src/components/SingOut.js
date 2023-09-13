import { Button } from '@mui/material'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js'
import React from 'react'

function SingOut() {
  return (
    <div style={{margin:10}}>
      <Button variant="contained" onClick={() => {auth.signOut()}}>Log Out</Button>
    </div>
  )
}

export default SingOut;