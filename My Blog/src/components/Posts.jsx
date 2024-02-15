/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import List from './List';
import { usePosts } from "./PostContext";
export default function Posts() {
  const {posts}=usePosts();
  return (
    <section>
      <ul className="posts">
        {posts.map((post,i)=><List key={i}  post={post}/>)}
        {/* <li className="list-box">
          <h3>Megha</h3>
          <p>
            synthesizing the firewall won't do anything, we need to override the
            optical PCI program!
          </p>
        </li> */}
      </ul>
    </section>
  );
}
