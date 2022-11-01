import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebaseConfig";
import { toast } from "react-toastify";
import "./AddMessage.css";
import { Button } from "@mui/material";

// Magnus

export default function AddMessage() {
  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    image: "test",
    createdAt: Timestamp.now().toDate(),
    Group: "",
    SentBy: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handlePublish = () => {
    if (!formData.Title || !formData.Description) {
      alert("Udfyld alle felter, tak!");
      return;
    }

    const storageRef = ref(storage, `/images/${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          Title: "",
          Description: "",
          image: "test",
          Group: "",
          SentBy: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const MessageRef = collection(db, "Messages");
          console.log(formData.image);
          if (formData.image === "test") {
            addDoc(MessageRef, {
              Title: formData.Title,
              Description: formData.Description,
              createdAt: Timestamp.now().toDate(),
              Group: formData.Group,
              SentBy: formData.SentBy,
            })
              .then(() => {
                toast("Message added successfully", { type: "success" });
                setProgress(0);
              })
              .catch((err) => {
                toast("Error adding Message", { type: "error" });
              });
          }
        });
      }
    );
  };
  return (
    <div className="form">
      <h2>Tilføj post</h2>
      <label htmlFor="">Select gruppe:</label>
      <select
        name="Group"
        className="form-control"
        value={formData.Group}
        onChange={(e) => handleChange(e)}
      >
        <option value="Curse of Strahd">Curse Of Strahd</option>
        <option value="Tomb of Horrors">Tomb of Horrors</option>
        <option value="Dragon of Icespire Peek">Dragon of Icespire Peek</option>
        <option value="Lost Mines of Phandelver">
          Lost Mines of Phandelver
        </option>
        <option value="Candlekeep Mysteries">Candlekeep Mysteries</option>
      </select>

      <label htmlFor="">Title:</label>
      <input
        type="text"
        name="Title"
        className="form-control"
        value={formData.Title}
        onChange={(e) => handleChange(e)}
      />

      {/* Description*/}
      <label htmlFor="">Beskrivelse:</label>
      <textarea
        name="Description"
        className="form-control"
        value={formData.Description}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Sendt af:</label>
      <input
        type="text"
        name="SentBy"
        className="form-control"
        value={formData.SentBy}
        onChange={(e) => handleChange(e)}
      />
      {progress === 0 ? null : (
        <div className="progess">
          <div
            className="progress-bar progress-bar-striped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`besked sendes ${progress}`}
          </div>
        </div>
      )}
      <Button
        sx={{
          border: "var(--border)",
          color: "var(--addBtnColor)",
          backgroundColor: "var(--addBtnBGColor)",
          marginTop: 4,
        }}
        className="form-control-btn"
        onClick={handlePublish}
      >
        Send besked
      </Button>
    </div>
  );
}
