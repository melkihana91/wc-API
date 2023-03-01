import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { PostCard } from './PostCard'
const Posts = () => {
    const[postsList, setPostsList]= useState([])
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>setPostsList(res.data)).catch((err)=>console.log(err))
}, [])
  return (
    <div>
        { postsList.map((post)=>< PostCard post={post}/>)}
    </div>
  )
}

export default Posts