import axios from 'axios';
import Navbar from '../components/Nav2';
import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../scss/blogpost.scss'


const Blogpost = () => {
  const { id }= useParams();
  const url=`/api/singleblog?id=${id}`;
  const [postdata, setPostData] = useState([]);
  
  useEffect(() => {
    const featchData= async()=>{
      try{
        const result= await axios.get(url);
        if(result.data.post){
          setPostData(result.data.post);
         
        }
      }catch (error) {
        console.log(error)
      }
    } 
    featchData();
  }, [])
  console.log("data successfully fetched",postdata);
  return (
    <div className='single_blogpost'>
      <div style={{ backgroundColor: "#40404F", height: "3rem" }}> 
      <Navbar/>
      </div>
     <div className='post_heighlight '>
     <h1>{postdata.title}</h1>

     {postdata.img &&  <img src={postdata.img} alt="img"></img> }
     <p>{postdata.description}</p>
     </div>
       
        <div  
        dangerouslySetInnerHTML={{__html: postdata.content}}   
        className='post_content'></div>
       

      

        <Footer/>
      
    </div>
  )
}

export default Blogpost
