import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import SearchPosts from "./components/SearchPosts";
import Main from "./components/Main";
import FormAddPost from "./components/FormAddPost";
import Posts from "./components/Posts";
import List from "./components/List";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { PostProvider, usePosts } from "./components/PostContext";

function App() {

  
  return (
    //2 Provide value to child components
    <PostProvider>
      {" "}
      <div className="app">
        <Header>
          <Results />
          <SearchPosts />
        </Header>
        <Main>
          <FormAddPost />
          <Posts></Posts>
        </Main>
        <Archive></Archive>
        <Footer></Footer>
      </div>
    </PostProvider>
  );
}

export default App;
