import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "../firebaseConfig";



export default function Communities() {
    const [Communities, SetCommunities] = useState([]);
    useEffect(()=>{
        const communityRef = collection(db, "Communities");
        const q = query(communityRef, orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot) =>{
            const communities = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),}));
            SetCommunities(communities);
            console.log(communities);
        });
        
    },[]);

  return (
    <div className='communities'>
        <h2>Communities</h2>
        {
            
            Communities.length === 0 ? (
                <p>No communities found!</p>
            ) : (
                Communities.map(({id,title,description,imageUrl,createdAt,tags}) => (
                <div className = 'community' key = {id}>
                    <div className='text'>
                        <div className={!imageUrl ? "noimg" : "img"}>
                            <img src = {imageUrl} alt="title" />
                        </div>
                        <h2>{title}</h2>
                        <p>{createdAt.toDate().toDateString()}</p>
                        <h4>{description}</h4>
                        <p>{tags}</p>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}
