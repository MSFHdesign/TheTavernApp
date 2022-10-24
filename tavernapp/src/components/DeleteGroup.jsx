import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { db, storage } from '../firebaseConfig'
import { toast } from 'react-toastify'

export default function DeleteGroup({id, imageUrl}) {
    const groupDelete = async ()=>{
        try {
            await deleteDoc(doc(db, "Groups", id))
            toast("Group deleted successfully", {type: "success"})
            const storageRef = ref(storage, imageUrl)
            await deleteObject(storageRef)
    } catch (error) {
        toast("Error deleting group", {type: "error"})
    }
}
  return (
    <div>
        <button onClick={groupDelete}>Delete</button>
    </div>
  )
}
