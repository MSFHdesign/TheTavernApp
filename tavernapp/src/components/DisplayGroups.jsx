import { Button } from '@mui/material';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { db } from '../firebaseConfig';
import DeleteGroup from './DeleteGroup';


export default function Groups() {
    const [groups, setGroups] = useState([]);
        useEffect(() => {
    const groupRef = collection(db, "Groups");
    const q = query (groupRef, orderBy ("createdAt", "desc"));
    onSnapshot(q, (snapshot)=>{
       const groups = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
       }));
       setGroups(groups);
       console.log(groups);
    });
    },[]);

    return (
        <div>
            {groups.length === 0 ? (
                    <p>No groups found!</p>
                ) : ( groups.map(({id, group, description, imageUrl, createdAt, numberOfPeople, joinGroup}) => (
                    <div key={id}>
                        <div>
                            <div>
                                <img src={imageUrl} alt = 'title' style={{height: 180, width: 180}}/>
                            </div>
                            <div>
                                <h2>{group}</h2>
                                <p>{createdAt.toDate().toDateString()}</p>
                                <h4>{description}</h4>
                                <h4> Maximum group members: {numberOfPeople}</h4>
                                <Button> Join Group {joinGroup}</Button>
                                <DeleteGroup id={id} imageUrl={imageUrl}/>
                            </div>
                        </div>
                    </div> 
                ))
                    
            )}
        </div>


    );
}