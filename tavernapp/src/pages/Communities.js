import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Box } from "@mui/material";
import "./Communities.css";
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';

import { Typography } from "@mui/material";

//Gunvar

export default function Communities() {
  const [Communities, SetCommunities] = useState([]);

  function FancyButton(props) {    
    const key = `${props.id}-is-active`;

    const [active, setActive] = useState(
      JSON.parse(localStorage.getItem(key)) || false
    );

    const handleClick = () => {
      localStorage.setItem(key, !active);
      setActive(!active);
    };

    return (
      <div className="container">
        <button className={active ? "active" : "btn"} onClick={handleClick}>
          {active ? "Følger" : "Følg"}
        </button>
      </div>
    );
  }

  const [state, setState] = useState(Communities);

  const [activeTags, setActiveTags] = useState("1");

  function getActiveClass (id) {
    return (
      activeTags === id ? "active" : undefined
    );
  }

  const handleBtns = (e) => {
    let word = e.target.value;
    setActiveTags(e.target.id);
    if (word === "Alle") {
      setState(Communities);

    } else if (word === "Class") {
      const filtered = Communities.filter((item) => item.tags === "class");
      setState(filtered);

    } else if (word === "Noobs") {
      const filtered = Communities.filter((item) => item.tags === "noobs");
      setState(filtered);

    } else if (word === "Accessories") {
      const filtered = Communities.filter((item) => item.tags === "accessories");
      setState(filtered);

    } else if (word === "Location") {
      const filtered = Communities.filter((item) => item.tags === "location");
      setState(filtered);

      console.log(filtered);
    }
  };

  useEffect(() => {
    const communityRef = collection(db, "Communities");
    const q = query(communityRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const communities = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setState(communities);
      SetCommunities(communities);
      console.log(communities);
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        pt: "60px",
        pb: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
      className="communities"
    >
        <TopNav/>
      <Typography variant="h2" sx={{ fontSize: 50, color: "var(--H2Color)" }}>
        Communities
      </Typography>
      <div className="btns">
        <button value="Alle" className={getActiveClass("1")} id={"1"} onClick={handleBtns}>
          Alle
        </button>
        <button value="Class" className={getActiveClass("2")} id={"2"} onClick={handleBtns}>
          Class
        </button>
        <button value="Noobs" className={getActiveClass("3")} id={"3"} onClick={handleBtns}>
          Ny i dnd
        </button>
        <button value="Accessories" className={getActiveClass("4")} id={"4"} onClick={handleBtns}>
          Grej
        </button>
        <button value="Location" className={getActiveClass("5")} id={"5"} onClick={handleBtns}>
          Nær mig
        </button>
      </div>
      {Communities.length === 0 ? (
        <p>Ingen communities at finde</p>
      ) : (
        state.map((item) => (
          <div className="single-community" key={item.id}>
            <div className="text">
              <div className={!item.imageUrl ? "noimg" : "img"}>
                <img src={item.imageUrl} alt="title" />
              </div>
              <h2>{item.title}</h2>
              <h4>{item.description}</h4>
              <FancyButton id={item.id} />
            </div>
          </div>
        ))
      )}
  <BottomNav />  </Box>
  );
}
