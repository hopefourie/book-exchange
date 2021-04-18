import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import React, { useState } from 'react'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data: posts } = await axios.get('/api/posts');
      setPosts(posts);
    } catch (err) {
      console.error(err.message);
    }
  };

  const createPost = async (input) => {
    try {
      console.log("inside createPost")
      const { data: post } = await axios.put('/api/posts', input);
      setPosts([post, ...posts]);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <CreatePost posts={posts} createPost={createPost}/>
      <AllPosts posts={posts} setPosts={setPosts} getPosts={getPosts}/>
    </div>
)
}

export default Feed
