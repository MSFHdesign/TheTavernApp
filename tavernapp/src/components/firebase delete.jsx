import { deleteDoc,doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../firebaseConfigv2'

export default function FirebaseDelete({id, imageUrl}) {
    const handleDelete =async() =>{
        try{
          const storageRef = ref(storage,imageUrl)
          if(storageRef==="https://firebasestorage.googleapis.com/v0/b/the-tavern-8aaf4.appspot.com/o/images%2F252297749_595594128348974_7081586526780283770_n.jpg?alt=media&token=16071e12-d653-41d8-bfe5-7a7534870801"){
            await deleteDoc(doc(db, "Articles",id))
            toast("article deleted successfully", {type:"success"})    
          }else{
        await deleteDoc(doc(db, "Articles",id))
        toast("article deleted successfully", {type:"success"})
        const storageRef = ref(storage,imageUrl)
        await deleteObject(storageRef)
      }
    }
    catch (error){
        toast("Error deleting article", {type: "error"})
        console.log(error)
    }
    }
  return (
    <div>
        <button className='deletebtn' onClick={handleDelete}>Delete</button>
    </div>
  )
}
