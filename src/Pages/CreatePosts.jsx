import React, { useState, useCallback, memo } from 'react';
import QuillEditor from '../components/QuillEditor';
import  '../scss/createposts.scss';
import axios
 from 'axios';
// const MemoizedQuillEditor = memo(QuillEditor);

const CreatePosts = ({Sucess,Alert}) => {
  const url='/api/addpost'
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [editorText, setEditorText] = useState(' ');
  const [editorValue, setEditorValue] = useState('<h1>this is the editor text</h1>');
  const [postData, setPostData] = useState({
    title: "",
    bannerimg: '',
    description: "",
  });

  const handleInputChange = useCallback((event) => {
    const { name, value, files } = event.target;
    const newValue = files ? files[0] : value;
    setPostData((prevData) => ({
      ...prevData,
      [name]: newValue

    }));
  }, []);


  const  handleSubmit =  useCallback(async(e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('bannerimg', postData.bannerimg);
      formData.append('description', postData.description);
      formData.append('content', editorText);
    
      // Logging the FormData contents
    const response =   await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }} );


      console.log(response);
      if(response.data.status === 200) {
        Sucess("Post created successfully");
      } else {
        Alert( "Something went wrong");
      }

    }catch (error) {
      console.error(error);
      Alert("Something went wrong", error);
      
    }
   


  }, [postData, editorText]);
  
  
  const handleEditorChange = useCallback((value) => {
    setEditorText(value);
  }, []); 
  

  return (
    <div className='createposts'>
      <div className='items_container'>
        <h1>Create Posts</h1>
        <form onSubmit={handleSubmit} className='create_form'>
          <button type="submit" className='submitbtn'>Submit</button>

          <div className="input_container">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={postData.title}
            onChange={handleInputChange}
          />
          <input
            type="file"
            id="imageInput"
            name="bannerimg"
            accept="image/*"
            onChange={handleInputChange}
          />
          <textarea
            id="description"
            name="description"
            placeholder="Short description"
            value={postData.description}
            onChange={handleInputChange}
          />
          </div>
        </form>
        < QuillEditor value={editorValue} textEditorfn={handleEditorChange} />
        {showAlert && <p>Please fill in all fields</p>}
        {showSuccess && <p>Post created successfully!</p>}
      </div>
    </div>
  );
};

export default CreatePosts;
