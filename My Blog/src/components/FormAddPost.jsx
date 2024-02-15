import React, { useContext } from 'react'
import { useState } from 'react';
import { usePosts } from "./PostContext";
export default function FormAddPost() {

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { addPost } = usePosts();
  return (
    <div className="add-form-container">
      <form action="">
        <div>
          <input
            type="text"
            placeholder="Post title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="post-body">
          <input
            type="text"
            placeholder="Post body"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </div>
        <button className="btn" onClick={(e)=>{
          e.preventDefault();
          addPost({title:postTitle,body:postBody})
          setPostBody('');
          setPostTitle('');
          }}>
          Add Post
        </button>
      </form>
    </div>
  );
}
