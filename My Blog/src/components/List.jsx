import React from 'react'

export default function List({post}) {
  return (
    <li className="list-box">
      <h3>{post.title}</h3>
      <p>
        {post.body}
      </p>
    </li>
  );
}
