import { addDoc, collection, Timestamp } from 'firebase/firestore'
import React, {useState} from 'react'
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
import {storage, db} from "../firebaseConfig"
import {toast} from "react-toastify"
import "./AddMessage.css"

export default function AddMessage() {
    const [formData, setFormData] =useState({
        Title:"",
        Description:"",
        image:"test",
        createdAt: Timestamp.now().toDate(),
        Group:"",
        SentBy:"",
    });

    const [progress, setProgress] = useState(0);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
        console.log(formData);
    };

    const handlePublish = ()=>{
        if(!formData.Title  || !formData.Description){
            alert("Please fill all the fields");
            return;
        }


        const storageRef = ref(storage,`/images/${formData.image.name}` );

        const uploadImage = uploadBytesResumable(storageRef,formData.image)

        uploadImage.on("state_changed",
        (snapshot)=>{
            const progressPercent =Math.round((snapshot.bytesTransferred /snapshot.totalBytes)*100);
            setProgress(progressPercent);
        },
        (err)=>{
            console.log(err);
        },
        ()=>{
            setFormData({
                Title: "",
                Description: "",
                image: "test",
                Group:"",
                SentBy:"",
            });
            
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
                const MessageRef = collection(db, "Messages");
                console.log(formData.image);
                if (formData.image==="test"){
                    addDoc(MessageRef, {
                        Title: formData.Title,
                        Description: formData.Description,
                        createdAt: Timestamp.now().toDate(),
                        Group:formData.Group,
                        SentBy:formData.SentBy,
                    })
                    .then(() => {
                        toast("Message added successfully",{type:"success"});
                        setProgress(0);
                    })
                    .catch((err) => {
                        toast("Error adding Message",{type:"error"});
                });
                }
        });
    });
}
  return (
    <div className='form'>
        <h2>Add a post</h2>
        <label htmlFor="">Select group:</label>
        <input type="text" name='Group' className='form-control' value={formData.Group} onChange={(e)=> handleChange(e)} />

        <label htmlFor="">Title:</label>
        <input type="text" name='Title' className='form-control' value={formData.Title} onChange={(e)=> handleChange(e)} />
        
        {/* Description*/}
        <label htmlFor="">Description:</label>
        <textarea name='Description' className='form-control' value={formData.Description} onChange={(e)=> handleChange(e)}/>

        <label htmlFor="">Sent by:</label>
        <input type="text" name='SentBy' className='form-control' value={formData.SentBy} onChange={(e)=> handleChange(e)} />
        {progress === 0 ? null :(
    <div className="progess">
        <div
        className="progress-bar progress-bar-striped mt-2"
        style={{width: `${progress}%` }}>
            {`uploading image ${progress}%`}
        </div>
    </div>
)} 
        <button className='form-control-btn'onClick={handlePublish}>Publish</button>
    </div>
  )
}

