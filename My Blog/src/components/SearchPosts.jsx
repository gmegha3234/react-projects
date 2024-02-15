import React, { useCallback, useContext, useState } from 'react'
import { usePosts } from "./PostContext";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();
  return (
    <input
      type="text"
      placeholder="Search Posts..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
