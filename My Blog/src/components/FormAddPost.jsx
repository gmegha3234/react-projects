import React from 'react'

export default function FormAddPost() {
  return (
    <div className="add-form-container">
      <form action="">
        <div>
          <input type="text" placeholder="Post title" />
        </div>
        <div className="post-body">
          <input type="text" placeholder="Post body" />
        </div>
        <button className='btn'>Add Post</button>
      </form>
    </div>
  );
}
