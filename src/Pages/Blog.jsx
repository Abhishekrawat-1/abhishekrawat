import React, { useEffect, useState} from 'react'
import BlogCard from '../components/BlogCard'
import '../scss/blogpage.scss'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Blog = () => {
  const [data, setData] = useState([]);
  const limit = 5;
  const url="/api/latestposts";

  useEffect(() => {
    const featchData= async()=>{
      try{
        const result = await axios.get(url)
        if(result.data){
          setData(result.data);
          console.log("data successfully fetched",data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    featchData();
  },[])

  
  return (
    <>  
    <div className='blog_container'> 
    <h1>Blogs</h1>
    <div className='blogPage_container'>
        {data.map((item)=>(
            <Link to={`/blog/${item.id}`} key={item.id}>
            <BlogCard key={item.id} post={item}/>
            </Link>))}
            
            <div className="post-card">
          <Link to="/posts">
            <div className="blog_card" >
                <div >
                <h2 >More Posts</h2>
              <p>Click here to see all posts</p>
                </div>
              
            </div>
          </Link>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default Blog
