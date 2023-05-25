import React from 'react'
import'./style.css'
import { Link } from 'react-router-dom'
function Post({blog}) {
  return (
    <Link to={`/read/${blog.id}`} className='post-link'>
    <div className='blog'>
        <img src={blog.thumbnail} className="blog-image"/>
    <div className='blog-title'>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
    </div>
    </div>
    </Link>
  )
}

export default Post