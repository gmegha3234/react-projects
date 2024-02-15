import React, { useContext } from 'react'
import { useState } from 'react';
import { usePosts } from './PostContext';
export default function Archive() {
  const { createRandomPost, addPost }=usePosts();
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10 }, () => createRandomPost())
  );
  const [showArchive, setShowArchive] = useState(false);
  return (
    <div className="archive-container">
      <h3>POST ARCHIVE</h3>
      <button className="btn" style={{ width: "200px" }}  onClick={()=>setShowArchive(!showArchive)}>
        {showArchive ? "Hide Archive Posts" : "Show Archive Posts"} 
      </button>
      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button className='btn' onClick={() => {
                addPost(post)
               
              }}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
