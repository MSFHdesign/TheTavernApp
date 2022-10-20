import { deleteDoc,doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../firebaseConfig'

import { Button } from '@mui/material'

export default function DeleteMessage({id, imageUrl}) {
  const handleDelete =async() =>{
      try{
      await deleteDoc(doc(db, "Messages",id))
      toast("Message deleted successfully", {type:"success"})
      const storageRef = ref(storage,imageUrl)
      await deleteObject(storageRef)
  }
  catch (error){
      toast("Error deleting Message", {type: "error"})
      console.log(error)
  }
  }
return (
  <div>
      <Button sx={{border: '2px dotted red'}} className='deletebtn' onClick={handleDelete}>Delete</Button>
  </div>
)
}
