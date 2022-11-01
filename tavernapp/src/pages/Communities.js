import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Box } from "@mui/material";
import "./Communities.css";
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';
import DisplayCommunities from "../components/DisplayCommunities";
import { Typography } from "@mui/material";

// ------------ Gunvor---------------------

export default function Communities() {

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
      <DisplayCommunities />
      <BottomNav />  
  </Box>
  );
}
