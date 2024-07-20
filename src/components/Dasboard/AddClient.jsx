import React from 'react'

const AddClient = () => {
  return (
    <div className='addclientbg'>
        <div className='addclient_container'>
            <h1>Add Client</h1>
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email"></input>
            <label htmlFor="Password">Password</label>
            <input type="Password" name="Password"></input>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone"></input>
            <label htmlFor="category">Category</label>
            <input type="text" name="category"></input>
            <label htmlFor='status'>Status</label>
            <select name="status" id="status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <button>Add</button>
        </div>
      
    </div>
  )
}

export default AddClient
