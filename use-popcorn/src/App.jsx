import Navbar from "./components/Navbar";
import MainContent from "./components/Main";
import { Search } from "./components/Search";
import { NumResults } from "./components/NumResults";
import Main from "./components/Main";
import { useState } from "react";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import StarRating from "./components/StarRating";
const movieListData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const movieWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
function App() {
  const [movies, setMovies] = useState(movieListData);
  const [watched, setWatched] = useState(movieWatchedData);
  const [modal, setModal] = useState(false);
  return (
    // <>
    //   <Navbar></Navbar>
    //   <MainContent
    //     movieListData={movieListData}
    //     movieWatchedData={movieWatchedData}
    //   ></MainContent>
    // </>

    <>
      <Navbar>
        <Search></Search>
        <NumResults movies={movies}></NumResults>
      </Navbar>
      <Main>
        {/* Passing element as children  */}
        <Box>
          <MovieList movies={movies}></MovieList>
        </Box>
        {/* Passing element as prop */}
        {/* <Box element={<MovieList movies={movies}></MovieList>}></Box>
           
            */}
        <Box>
          <WatchedSummary watched={watched}></WatchedSummary>
          <WatchedMoviesList watched={watched}></WatchedMoviesList>
          <StarRating
            maxRating={5}
            color={"red"}
            size={22}
            className="test"
            messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
            defaultRating={3}
          />
          <StarRating />
          <Test/>
        </Box>
      </Main>
      {/* <button onClick={() => setModal(true)}>OPEN</button> */}
      {/* {modal && (
        <Overlay clickHandler={() => setModal(false)}>
          <Modal />
        </Overlay>
      )} */}
    </>
  );
}
export default App;
function Test(){
  const [movieRating,setMovieRating]= useState(0)
  return <div>
    <StarRating color="blue" onSetRating={setMovieRating}></StarRating>
    <p>This movie was rated {movieRating} stars</p>
  </div>
}
