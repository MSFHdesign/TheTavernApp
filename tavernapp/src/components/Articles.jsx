import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import {db} from "../firebaseConfig";

export default function Articles() {
    const [Articles, SetArticles] = useState([]);
    useEffect(()=>{
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot) =>{
            console.log(snapshot);
        })
    })
  return (
    <div>
        {
            Articles.length === 0 ? (
                <p>no articles found!</p>
            ):(
                Articles.map((article) => <div className='articles'>
                div </div>
            ))
        }
    </div>
  )
}
