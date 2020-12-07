import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {

 const [posts, setPost] = useState([])
 const [id, setId] = useState(1)

  const [idFromButtonClick, setidFromButtonClick] = useState(1)

 useEffect(() => {
   axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
   .then(res => {
    console.log(res);
    setPost(res.data);
   })
   .catch(err => {
    console.log(err);
   });
 }, [idFromButtonClick])

 const getPost = (e) => {
   setId(e.target.value);
 }

const handleClick = () => {
  setidFromButtonClick(id)
}

 return (
  <div>
    <input type="text" value={id} onChange={getPost} />
    {posts.title}
    <button type="button" onClick={handleClick}>
      Fetch Post
    </button>
   {/* <ul>
    {
     posts.map(post => (<li key={post.id}>{post.title}</li>))
    }
   </ul> */}
  </div>
 )
}

export default DataFetching
