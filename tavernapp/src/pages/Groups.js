import { Box } from "@mui/system";
import React from "react";
import DisplayGroups from "../components/DisplayGroups";
import TopNav from "../components/TopNav";
import BoxAddGroup from "../components/boxaddgroup";
import "./Groups.css";

import BottomNav from "../components/BottomNav";
const ContainerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--Gap)",
};

export default function Groups() {
  return (
    <Box sx={ContainerStyle}>
      {" "}
      <TopNav />
      <h2 className="test">Groups</h2>
      <Box
        sx={{
          m: 1,
          display: "flex",
          borderRadius: "26px",
          pb: "calc(var(--addbtnSize) + 10%)",
        }}
      >
        <DisplayGroups />
      </Box>
      <Box
        sx={{
          m: 1,
          display: "flex",
          borderRadius: "26px",
          pb: "calc(var(--addbtnSize) + 10%)",
        }}
      >
        <BoxAddGroup />
        <BottomNav />
      </Box>
    </Box>
  );
}
