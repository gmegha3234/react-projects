/* eslint-disable react/prop-types */
import Navbar from "./components/Navbar";
import MainContent from "./components/Main";
import { Search } from "./components/Search";
import { NumResults } from "./components/NumResults";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import StarRating from "./components/StarRating";
import Loader from "./components/Loader";
import MovieDetails from "./components/MovieDetails";
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
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  // const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState();
  // const [movieWatchedAlready, setMovieWatchedAlready]=useState(false);
  const KEY = "613ff202";
  const tempQuery = "titanic";

  // useEffect(function(){
  //    console.log("a");
  // },[]);

  // useEffect(function(){
  //   console.log("b");
  // })
  // console.log("c");

  useEffect(function () {
    const controller = new AbortController();
    async function FetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal : controller.signal}
        );
        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await response.json();
        if (data.Response == "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setIsLoading(false);
        setError("");
      } catch (err) {
        console.log(err);
        if(err.name !== 'AbortError'){
            setError(err.message);
        }
       
      } finally {
        setIsLoading(false);
      }
    }
    if(query.length<3){
      setMovies([]);
      setError('');
      return;
    }
    handleCloseMovie();
    FetchMovies();

    return function(){
      controller.abort();
    }
  }, [query]);
 
  function handleSelectedMovie(id){
    // const isFound = watched.some((element) => {
    //   if (element.imdbID === id) {
    //     return true;
    //   }
    //   return false;
    // });
    // isFound ? setMovieWatchedAlready(true) : setMovieWatchedAlready(false);
    setSelectedId((selectedId)=>id===selectedId?null:id);
  }
  
  function handleCloseMovie(){
    setSelectedId();
  }

  function handleWatchMovie(movie){
      
      setWatched((watched)=>[...watched,movie])
  }

  function handleDeletedWatch(id){
        setWatched((watched)=>watched.filter((movie)=>movie.imdbID!==id));
  }

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
        <Search query={query} setQuery={setQuery}></Search>
        <NumResults movies={movies}></NumResults>
      </Navbar>
      <Main>
        {/* Passing element as children  */}
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies}></MovieList>} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectedMovie}
              selectedId={selectedId}
            ></MovieList>
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        {/* Passing element as prop */}
        {/* <Box element={<MovieList movies={movies}></MovieList>}></Box>
           
            */}
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onMovieWatched={handleWatchMovie}
              // movieWatchedAlready={movieWatchedAlready}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched}></WatchedSummary>
              <WatchedMoviesList
                watched={watched}
                onDeleteWatch={handleDeletedWatch}
              ></WatchedMoviesList>
            </>
          )}

          {/* <StarRating
            maxRating={5}
            color={"red"}
            size={22}
            className="test"
            messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
            defaultRating={3}
          />
          <StarRating /> */}
          {/* <Test /> */}
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
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating}></StarRating>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🙇‍♀️</span> {message}
    </p>
  );
}
