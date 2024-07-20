import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Navbar2 from '../components/Nav2';
import Navbar2 from '../components/Nav2';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import Pagination from '../components/Paginations/Pagination';
import '../scss/posts.scss';
import axios from 'axios';

const Posts = () => {
  const [search, setSearch] = useState('');
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 15;
  const [totalPages, setTotalPages] = useState(0);

  const url=`/api/allposts?page=${currentPage}&search=${search}`;


  useEffect(() => {
    const featchData= async()=>{
      try {
       const result = await axios.get(url);
        if(result.data){
          setPostData(result.data.posts);
          setTotalPages(result.data.total);
          console.log("data successfully fetched",postData);
        }
      } catch (error) {    
        console.log(error);
      } 
      
    }
    featchData();
  }, [search,currentPage]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  
  console.log("data successfully fetched",postData);
  return (
    <div className='blogPost_container'>
      <div style={{ backgroundColor: "#40404F", height: "3rem" }}>
        <Navbar2 />
      </div>

      <div className='search_container'>
        <input
          type='text'
          placeholder='Search..'
          name='search'
          value={search}
          onChange={handleSearch}
          // style={{ color: 'black', backgroundColor: 'white', padding: '0.5rem', borderRadius: '4px' }}
        />
      </div>

      <div className='blogPost_list'>
        { postData.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <BlogCard key={item.id}  post={item} />
          </Link>
        ))}

<Pagination
        className="pagination-adminBar"
        currentPage={currentPage}
        totalCount={totalPages}
        pageSize={limit}
        onPageChange={page => setCurrentPage(page)}
      />
      </div>

      <Footer />
    </div>
  );
};

export default Posts;
