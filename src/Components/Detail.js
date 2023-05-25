import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

function Detail() {
    const{id}=useParams();
    const[post, setPost]=useState([]);
    const[ImageArray, setImagearr]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/'+id,{credentials: 'omit'})
        .then(res=>{
            setPost(res.data)
            setImagearr(res.data.images)
        })
                    
        .catch(err=>console.log(err))
    },[id])
  return (
    <div className="detail-post-container">
        <div className="title-description">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
        <div className="images-container">
            {
               
               ImageArray.map((image, index)=>{
               return <img src={image} alt='pic' key={index}></img>
               })
               
            }
        </div>
    </div>
  )
}

export default Detail