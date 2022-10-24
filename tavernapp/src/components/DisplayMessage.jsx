import { Box, Typography } from '@mui/material';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import {db} from "../firebaseConfig";
import DeleteMessages from './DeleteMessage';
import "./Message.css"

export default function DisplayMessages() {
    const [Messages, SetMessages] = useState([]);
    useEffect(()=>{
        const MessageRef = collection(db, "Messages");
        const q = query(MessageRef, orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot) =>{
            const Messages = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),}));
            SetMessages(Messages);
            console.log(Messages);
        });
        
    },[]);

  return (
    <div className='Messages'>
        {
            Messages.length === 0 ? (
                <p>No Messages found!</p>
            ) : (
                Messages.map(({id,Title,Description,createdAt,SentBy,Group}) => (
                <Box sx={{m: 2,mt:4, p: 1, backgroundColor: 'whitesmoke', borderRadius:'26px' }} className = 'Message' key = {id}>
                    <div className='text'>
                        <Typography variant='h3' sx={{fontSize: '20px',textDecoration: 'bold',pt:2}}>{Title} sent to {Group} 
                        
                        </Typography>
                        
                        <Typography variant ='p' sx={{textDecoration: 'underline', fontSize: 14, mb: 2}}>
                            Sent by: {SentBy} {createdAt.toDate().toDateString() }
                        <br/>
                        </Typography>
                        
                        <Typography variant ='p' sx={{fontSize: 20, pt: 2, pb: '22px',}}>{Description}</Typography>
                        
                        <DeleteMessages id={id}/>
                        </div>
                </Box>
            ))
        )}
    </div>
  )
}
