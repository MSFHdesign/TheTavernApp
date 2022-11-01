import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfigv2";
import FirebaseDelete from "./firebase delete";
import "./Article.css";

// Magnus

export default function Articles() {
  const [Articles, SetArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div className="articles">
      {Articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        Articles.map(({ id, title, description, imageUrl, createdAt }) => (
          <div className="article" key={id}>
            <div className="text">
              <h2>{title}</h2>
              <p>{createdAt.toDate().toDateString()}</p>
              <h4>{description}</h4>
              <div className={!imageUrl ? "noimg" : "img"}>
                <img src={imageUrl} alt="title" />
              </div>
              <FirebaseDelete id={id} imageUrl={imageUrl} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
