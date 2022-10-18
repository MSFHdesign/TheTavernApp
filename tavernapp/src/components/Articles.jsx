import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import {db} from "../firebaseConfig";

export default function Articles() {
    const [Articles, SetArticles] = useState([]);
    useEffect(()=>{
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot) =>{
            const articles = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),}));
            SetArticles(articles);
            console.log(articles)
        });
    },[]);
  return (
    <div>
        {
            Articles.length === 0 ? (
                <p>No articles found!</p>
            ) : (
                Articles.map(({id,title,description,imageURL,createdAt}) => (
                <div className = 'articles' key = {id}>
                    <div className='row'>
                        <div className='col-3'>
                            <img src = {imageURL} alt="title" style = {{height: 180, width: 180}}/>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}
