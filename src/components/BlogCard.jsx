import React from 'react'
import '../scss/blogcard.scss'
import imageurl from '../images/blog.jpg'

const BlogCard = ({post}) => {
  return (
    <div className='blog_card'>
      <img src={imageurl} alt=''/>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <h4>{post.date}</h4>
      
    </div>
  )
}

export default BlogCard
