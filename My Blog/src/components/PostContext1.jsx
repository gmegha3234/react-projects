import { useContext,useState } from "react";
import { faker } from "@faker-js/faker";
const PostContext = useContext();
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
function PostProvider(){
    //put all state updating logic there
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

     return <PostContext.Provider
      value={{
        posts: searchedPosts,
        addPost: addPost,
        clearPost: clearPost,
        searchQuery,
        setSearchQuery,
        createRandomPost,
      }}
     >

     </PostContext.Provider>
}
