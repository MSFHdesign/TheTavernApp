import { Box, Typography } from '@mui/material';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import {db} from "../firebaseConfig";
import DeleteMessages from './DeleteMessage';

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
                <Box sx={{m: 2,mt:4, p: 1, backgroundColor: 'hsl(0, 0%, 0%, 0.40)', borderRadius:'26px',border: 'var(--border)' }} className = 'Message' key = {id}>
                    <div className='text'>
                        <Typography variant='h3' sx={{fontSize: '20px',textDecoration: 'bold',pt:2, color:'whitesmoke'}}>{Title} sent to {Group} 
                        
                        </Typography>
                        
                        <Typography variant ='p' sx={{textDecoration: 'underline', fontSize: 14, mb: 2, color:'whitesmoke'}}>
                            Sent by: {SentBy} {createdAt.toDate().toDateString() }
                        <br/>
                        </Typography>
                        
                        <Typography variant ='p' sx={{fontSize: 20, pt: 2, pb: '22px', color:'whitesmoke'}}>{Description}</Typography>
                        
                        <DeleteMessages id={id}/>
                        </div>
                </Box>
            ))
        )}
    </div>
  )
}
