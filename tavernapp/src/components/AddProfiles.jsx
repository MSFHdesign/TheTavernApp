import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebaseConfig";
import { toast } from "react-toastify";
import "./AddProfile.css";

// Magnus

export default function AddProfile() {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    profilepic: "test",
    createdAt: Timestamp.now().toDate(),
    Name: "",
    Age: "",
    City: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profilepic: e.target.files[0] });
  };

  const handlePublish = () => {
    if (
      !formData.Username ||
      !formData.Password ||
      !formData.Name ||
      !formData.Age ||
      !formData.profilepic ||
      !formData.City
    ) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/profiles/${formData.profilepic.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.profilepic);

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
        alert("Your account have been created");
        setFormData({
          Username: "",
          Password: "",
          profilepic: "test",
          Name: "",
          Age: "",
          City: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const ProfileRef = collection(db, "profiles");
          console.log(formData.profilepic);
          addDoc(ProfileRef, {
            Username: formData.Username,
            Password: formData.Password,
            profilepicUrl: url,
            createdAt: Timestamp.now().toDate(),
            City: formData.City,
            Name: formData.Name,
            Age: formData.Age,
          })
            .then(() => {
              toast("Profile added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding Profile", { type: "error" });
            });
        });
      }
    );
  };
  return (
    <div className="form">
      <h2>Tilføj en profil</h2>
      <label htmlFor="">Bruger navn:</label>
      <input
        type="text"
        name="Username"
        placeholder="Brugernavn:"
        className="form-control"
        value={formData.Username}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Password:</label>
      <input
        type="password"
        name="Password"
        placeholder="Password:"
        className="form-control"
        value={formData.Password}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Profile billede:</label>
      <input
        type="file"
        name="profilepic"
        accept="image/*"
        className="form-control"
        id="imgInput"
        onChange={(e) => handleImageChange(e)}
      />

      <label htmlFor="">Navn:</label>
      <input
        type="text"
        name="Name"
        placeholder="Fuldenavn:"
        className="form-control"
        value={formData.Name}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Alder:</label>
      <input
        type="number"
        name="Age"
        placeholder="Alder: "
        className="form-control"
        value={formData.Age}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">By:</label>
      <input
        type="text"
        name="City"
        placeholder="By:"
        className="form-control"
        value={formData.City}
        onChange={(e) => handleChange(e)}
      />

      {progress === 0 ? null : (
        <div className="progess">
          <div
            className="progress-bar progress-bar-striped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`uploading profilepic ${progress}%`}
          </div>
        </div>
      )}

      <button className="form-control-btn" onClick={handlePublish}>
        Add user
      </button>
    </div>
  );
}
