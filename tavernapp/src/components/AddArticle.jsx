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
        image:"test",
        createdAt: Timestamp.now().toDate(),
        community:"",
    });

    const [progress, setProgress] = useState(0);

    const handleChange=(e)=>{
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
                title: "",
                description: "",
                image: "test",
                community:"",
            });
            
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
                const articleRef = collection(db, "Articles");
                console.log(formData.image);
                if (formData.image==="test"){
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
                        createdAt: Timestamp.now().toDate(),
                        community: formData.community,
                    })
                    .then(() => {
                        toast("Article added successfully",{type:"success"});
                        setProgress(0);
                    })
                    .catch((err) => {
                        toast("Error adding article",{type:"error"});
                });
                } else {
                addDoc(articleRef, {
                    title: formData.title,
                    description: formData.description,
                    imageUrl:url,
                    createdAt: Timestamp.now().toDate(),
                    community: formData.community,
                })
                .then(() => {
                    toast("Article added successfully",{type:"success"});
                    setProgress(0);
                })
                .catch((err) => {
                    toast("Error adding article",{type:"error"});
            });}
        });
    });
}
  return (
    <div className='form'>
        <h2>Add a post</h2>
        
        <label htmlFor="">Select community</label>
        <select name='community' className='form-control' value={formData.community} onChange={(e)=> handleChange(e)}>
            <option value="DM-skærme">DM-skærme</option>
            <option value="Dnd'ere i Aarhus">Dnd'ere i Aarhus</option>
            <option value="Dnd'ere i Aalborg">Dnd'ere i Aalborg</option>
            <option value="Guide til spændende karaktere">Guide til spændende karaktere</option>
            <option value="For nybegyndere">For nybegyndere</option>
            <option value="Terningsamlerne">Terningsamlerne</option>
            <option value="Rangers-be-rangin">Rangers be rangin'</option>
            <option value="Bards-unite">Bards unite!</option>
        </select>

        <label htmlFor="">Title</label>
        <input type="text" name='title' className='form-control' value={formData.title} onChange={(e)=> handleChange(e)} />
        
        {/* description*/}
        <label htmlFor="">description</label>
        <textarea name='description' className='form-control' value={formData.description} onChange={(e)=> handleChange(e)}/>

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

