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
                <div className = 'Message' key = {id}>
                    <div className='text'>
                        <h2>{Title} sent to {Group}</h2>
                        <p>Sent by: {SentBy} {createdAt.toDate().toDateString()}</p>
                        <h4>{Description}</h4>
                        
                        <DeleteMessages id={id}/>
                        </div>
                </div>
            ))
        )}
    </div>
  )
}
