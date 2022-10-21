import React from 'react'

export default function AddGroups() {
  return (
    <div style={{position: "fixed"}}>
        <h2>Create group</h2>
        <label htmlFor="">Group Name</label>
        <input type="text" name='group' />

            {/*description*/}
        <label htmlFor="">Description</label>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
            {/* image */}
        <label htmlFor="">Image</label>
        <input type="file" name='image' accept='image/*' />

    </div>
  )
}
