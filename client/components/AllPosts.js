import React, { useState, useEffect } from 'react'
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

const AllPosts = (props) => {

  useEffect(() => {
    props.getPosts();
  }, []);

  console.log(props.posts);
    return (
      <div className="component">
          {props.posts.map(post => {
            return (
              <div key={post.id} className="post-box">
                <h2>{post.heading}</h2>
                <p>{post.text}</p>
              </div>
            )
          })}
      </div>
    )
  }

export default AllPosts
