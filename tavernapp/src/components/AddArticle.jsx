import { addDoc, collection, Timestamp } from 'firebase/firestore'
import React, {useState} from 'react'
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
import {storage, db} from "./../firebaseConfig"
import {toast} from "react-toastify"
import "./AddArticle.css"

export default function AddArticle() {
    const [formData, setFormData] =useState({
        title:"",
        description:"",
        image:"",
        createdAt: Timestamp.now().toDate(),
    });

    const [progress, setProgress] = useState(0);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
        console.log(formData);
    };

    const handleChange2=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
        console.log(formData);
    };

    const handleImageChange=(e)=>{
        setFormData({...formData,image:e.target.files[0]});
    };

    const handlePublish = ()=>{
        if(!formData.title  || !formData.description){
            alert("Please fill all the fields");
            return;
        }

        const storageRef = ref(storage,`/images/${Date.now()}${formData.image.name}` );

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
                title: "",
                description: "",
                image: "",
            });
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
                const articleRef = collection(db, "Articles");
                addDoc(articleRef, {
                    title: formData.title,
                    description: formData.description,
                    imageUrl:url,
                    createdAt: Timestamp.now().toDate(),
                })
                .then(() => {
                    toast("Article added successfully",{type:"success"});
                    setProgress(0);
                })
                .catch((err) => {
                    toast("Error adding article",{type:"error"});
            });
        });
    });
}
  return (
    <div className='form'>
        <h2>Add a post</h2>
        <label htmlFor="">Title</label>
        <input type="text" name='title' className='form-control' value={formData.title} onChange={(e)=> handleChange(e)} />
        
        {/* description*/}
        <label htmlFor="">description</label>
        <input type="text" name='description' className='form-control' value={formData.description} onChange={(e)=> handleChange2(e)}/>

        <label htmlFor="">Image</label>
        <input type="file" name="image" accept="image/*" className="form-control" onChange={(e)=> handleImageChange(e)}/>

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

