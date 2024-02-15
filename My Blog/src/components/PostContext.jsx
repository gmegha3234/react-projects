import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
const PostContext = createContext();
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
function PostProvider({children}){
     const [posts, setPosts] = useState(() =>
       Array.from({ length: 30 }, () => createRandomPost())
     );
     const [searchQuery, setSearchQuery] = useState("");
     const searchedPosts =
       searchQuery.length > 0
         ? posts.filter((post) =>
             `${post.title} ${post.body}`
               .toLowerCase()
               .includes(searchQuery.toLowerCase())
           )
         : posts;

     function addPost(newPost) {
       setPosts((posts) => [newPost, ...posts]);
     }
     function clearPost() {
       setPosts([]);
     }
     return  <PostContext.Provider
      value={{
        posts: searchedPosts,
        addPost: addPost,
        clearPost: clearPost,
        searchQuery,
        setSearchQuery,
        createRandomPost,
      }}
    >
        {children}
    </PostContext.Provider>
}
function usePosts(){
    const context = useContext(PostContext);
    if(context===undefined) throw new Error('PostContext was used outside of the PostProvider')
    return context;

}
export {PostProvider,PostContext,usePosts};

