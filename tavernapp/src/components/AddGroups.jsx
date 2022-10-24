import React, { useState } from 'react'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebaseConfig';
import { toast } from 'react-toastify';

export default function AddGroups() {
    const [formData, setFormData] = useState({
        group: "",
        description: "",
        image:"", 
        createdAt: Timestamp.now().toDate(),
    });

    const [progress, setProgress] = useState(0);

    const handleChange=(e)=> {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleImageChange=(e)=> {
        setFormData({...formData, image:e.target.files[0]});
    };

    const handleCreateGroups = ()=> {
        if (!formData.group || !formData.description || !formData.image){
            alert('Please fill all the fields');
            return;
        }

       const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
        const uploadImage = uploadBytesResumable(storageRef, formData.image)

        uploadImage.on("state_changed", (snapshot) => {
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
            
        },

        (err)=>{
            console.log(err);
        },
        ()=> {
        setFormData({
        
            group:"",
            description: "",
            image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref)
        .then((url)=>{
            const groupRef = collection(db, "Groups");
            addDoc(groupRef,{
                group: formData.group,
                description: formData.description,
                imageUrl: url,
                createdAt: Timestamp.now().toDate(),
            })
            .then(() => {
                toast("Group created successfully", { type: "success"});
                setProgress(0);
            })
            .catch((err) => {
                toast("Error creating group", { type: "error"});
            });
        });
    }   
    );
        
};

    return (
    <div style={{position: "fixed"}}>
        <h2>Create group</h2>
        <label htmlFor="">Group Name</label>
        <input 
            type="text" 
            name='group' 
            value={formData.group} 
            onChange={(e)=>handleChange(e)}
        />

            {/*description*/}   
        <label htmlFor="">Description</label>
        <textarea 
            name="description" 
            value={formData.description} 
            cols="30" 
            rows="10">
            onChange={(e)=>handleChange(e)}
        </textarea>

            {/* image */}
        <label htmlFor="">Image</label>
        <input
            type="file"
            name='image' 
            accept='image/*'
            onChange={(e)=>handleImageChange(e)}
        />


        {progress === 0 ? null : (
            <div className='progress'>
                <div className='progess-bar progress-bar-striped mt-2'
                style={{ width: `${progress}%`}}
                >
                {`uploading image ${progress}%`}    
                </div>
            </div>
        )}
        <button onClick={handleCreateGroups}> 
        Create group
        </button>

    </div>
 );
}
