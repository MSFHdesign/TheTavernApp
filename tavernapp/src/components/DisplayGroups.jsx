import { Box, Button, Typography } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import DeleteGroup from "./DeleteGroup";

export default function Groups() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const groupRef = collection(db, "Groups");
    const q = query(groupRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const groups = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGroups(groups);
      console.log(groups);
    });
  }, []);

  function Member() {
    const [active, setActive] = useState(false);
    const joinClick = () => {
      setActive(!active);
    };

    const [joinState, setjoinState] = useState(false);
    const leaveClick = () => {
      setjoinState(!joinState);
    };

    return (
      <div>
        <Typography
          variant="p"
          sx={{ fontSize: 14, mb: 2, color: "whitesmoke" }}
        >
          {" "}
          Medlemmer i gruppen: {joinState + 1} <br />
        </Typography>
        <Button
          sx={{
            border: "var(--border)",
            color: "var(--addBtnColor)",
            backgroundColor: "var(--addBtnBGColor)",
            marginTop: 4,
          }}
          className="form-control-btn"
          onClick={(event) => [joinClick(), leaveClick(joinState)]}
        >
          {active ? "Forlad gruppe" : "Bliv medlem"}{" "}
        </Button>
      </div>
    );
  }

  return (
    <div>
      {groups.length === 0 ? (
        <p>No groups found!</p>
      ) : (
        groups.map(
          ({ id, group, description, imageUrl, createdAt, numberOfPeople }) => (
            <Box
              sx={{
                m: 2,
                mt: 4,
                p: 1,
                backgroundColor: "hsl(0, 0%, 0%, 0.40)",
                borderRadius: "26px",
                border: "var(--border)",
              }}
              key={id}
            >
              <div>
                <div>
                  <img
                    src={imageUrl}
                    alt="title"
                    style={{ height: 180, width: 180 }}
                  />
                </div>
                <div>
                  <Typography
                    sx={{
                      fontSize: "var(--H2size",
                      textDecoration: "bold",
                      pt: 2,
                      color: "whitesmoke",
                    }}
                  >
                    {group}
                  </Typography>

                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 20,
                      pt: 2,
                      pb: "22px",
                      color: "whitesmoke",
                    }}
                  >
                    {description}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontSize: 14, mb: 2, color: "whitesmoke" }}
                  >
                    {" "}
                    <br /> Maks antal medlemmer: {numberOfPeople} <br />
                  </Typography>
                  <Member />
                  <Typography
                    variant="p"
                    sx={{ fontSize: 14, mb: 2, color: "whitesmoke" }}
                  >
                    Gruppe oprettet: {createdAt.toDate().toDateString()} <br />
                  </Typography>
                  <DeleteGroup id={id} imageUrl={imageUrl} />
                </div>
              </div>
            </Box>
          )
        )
      )}
    </div>
  );
}
