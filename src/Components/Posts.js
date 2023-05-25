import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import './style.css'
import Post from './Post'



function Posts() {
    const[blogs,setBlogs]=useState([])
    const[input, setInput]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(res=>{
          setBlogs(res.data.products)
          setInput(res.data.products)
        })
        .catch(err=>console.log(err))
    },[])
    const getsearchhandler=(evt)=>{
        setBlogs(input.filter(r=>r.title.toLowerCase().includes(evt.target.value.toLowerCase())))
    }
  return (
    <div className='posts'>
        <div className='search-container'>
            <input type='text' onChange={getsearchhandler} placeholder='search' className='search-input'/>
        </div>
        <div className="blog-icon">
            <h3>BLOGS</h3>
            <i className="fa fa-calculator" aria-hidden="true"></i>
        </div>
        <div className='posts-container'>
            {
             blogs.map((blog,index)=>(
               <Post  blog={blog} key={index}/>
             ))
            }
        </div>
    </div>
  )
}

export default Posts