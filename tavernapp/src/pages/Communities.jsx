import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "../firebaseConfig";



export default function Communities() {
    const [Communities, SetCommunities] = useState([]);

    const [state, setState] = useState(Communities);

    const handleBtns =(e)=> {
        let word=e.target.value;
        if(word==='Alle') {
            setState(Communities)
        }
        else if(word==='Class') {
            const filtered = Communities.filter(item=>item.tags==='class');
            setState(filtered);
        }
        else if(word==='Noobs') {
            const filtered = Communities.filter(item=>item.tags==='noobs');
            setState(filtered);
        }
        else if(word==='Accessories') {
            const filtered = Communities.filter(item=>item.tags==='accessories');
            setState(filtered);
        }
        else if(word==='Location') {
            const filtered = Communities.filter(item=>item.tags==='location');
            setState(filtered);
        }
    };

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
        <div className='btns'>
            <button value="Alle" onClick={handleBtns}>Alle</button>
            <button value="Class" onClick={handleBtns}>Class</button>
            <button value="Noobs" onClick={handleBtns}>Ny i dnd</button>
            <button value="Accessories" onClick={handleBtns}>Grej</button>
            <button value="Location" onClick={handleBtns}>Nær mig</button>
        </div>
        {
            Communities.length === 0?(
                <p>Ingen communities at finde</p>
            ):(
            state.map((item)=>(
                <div className='single-community' key={item.id} >
                    <div className='text'>
                         <div className={!item.imageUrl ? "noimg" : "img"}>
                             <img src = {item.imageUrl} alt="title" />
                         </div>
                         <h2>{item.title}</h2>
                         <p>{item.createdAt.toDate().toDateString()}</p>
                         <h4>{item.description}</h4>
                         <p>{item.tags}</p>
                     </div>
                </div>
                ))
        )}
    </div>
  )
}
// Lav en button, der lagrer værdi for tags i en variabel. Brug if-statement til at sammenligne den tag-værdi med community item's tag. Er det true, så filtrer.