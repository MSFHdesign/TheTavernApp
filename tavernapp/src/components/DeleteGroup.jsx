import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { Button } from "@mui/material";


// Kasper
export default function DeleteGroup({ id, imageUrl }) {
  const groupDelete = async () => {
    try {
      await deleteDoc(doc(db, "Groups", id));
      toast("Group deleted successfully", { type: "success" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    } catch (error) {
      toast("Error deleting group", { type: "error" });
    }
  };
  return (
    <div>
      <Button
        sx={{
          border: "var(--DeleteBorder)",
          backgroundColor: "var(--Delete)",
          mt: 2,
          p: 1.3,
          color: "var(--DeleteColor)",
        }}
        className="deletebtn"
        onClick={groupDelete}
      >
        Slet gruppe
      </Button>
    </div>
  );
}
