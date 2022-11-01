import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import FirebaseDelete from "./DeleteProfile";
import "./Article.css";

// Magnus

export default function Profiles() {
  const [Profiles, SetProfiles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "profiles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const Profiles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetProfiles(Profiles);
      console.log(Profiles);
    });
  }, []);

  return (
    <div className="Profiles">
      {Profiles.length === 0 ? (
        <p>No Profiles found!</p>
      ) : (
        Profiles.map(({ id, title, description, imageUrl, createdAt }) => (
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
