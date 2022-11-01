import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebaseConfig";

// Magnus

export default function DeleteProfile({ id, imageUrl }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "profiles", id));
      toast("profile deleted successfully", { type: "success" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    } catch (error) {
      toast("Error deleting profile", { type: "error" });
      console.log(error);
    }
  };
  return (
    <div>
      <button className="deletebtn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
