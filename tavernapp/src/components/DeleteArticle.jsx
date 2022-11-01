import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebaseConfig";
import { Button } from "@mui/material";

// Magnus

export default function DeleteArticle({ id, imageUrl }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Articles", id));
      toast("article deleted successfully", { type: "success" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    } catch (error) {
      toast("Error deleting article", { type: "error" });
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        className="deletebtn"
        onClick={handleDelete}
        sx={{
          backgroundColor: "var(--Delete)",
          color: "var(--DeleteColor)",
          border: "var(--DeleteBorder)",
          marginTop: 2,
        }}
      >
        Slet
      </Button>
    </div>
  );
}
