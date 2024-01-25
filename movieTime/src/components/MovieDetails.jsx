import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
const KEY = "613ff202";
/* eslint-disable react/prop-types */
export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onMovieWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Actors: actors,
    Genre: genre,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Year: year,
    Title: title,
    Plot: plot,
    Director: director,
    imdbRating,
  } = movie;

  useEffect(function(){
      function callback(e){
        if(e.code === "Escape"){
          onCloseMovie();
          console.log(closed);
        }
       }
     document.addEventListener('keydown',callback)
       return function(){
         document.removeEventListener('keydown',callback);
       };
  },[onCloseMovie]);



  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }

      getMovieDetails();
    },
    [selectedId]
  );
  useEffect(
    function () {
      document.title = `"Movie | ${title}`;

      return function () {
        document.title = "movieTime";
        console.log(title); // it gives prevous movie title because of closures
      };
    },
    [title]
  );
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onMovieWatched(newWatchedMovie);
    onCloseMovie();
  }
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="back-btn" onClick={() => onCloseMovie()}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>

            <div className="detail-header">
              <img src={poster} alt="" />
              <section>
                <div className="details-overview">
                  <h2>{title}</h2>
                  <p>
                    {released} &bull; {runtime}
                  </p>
                  <p>{genre}</p>
                  <p>
                    <span>⭐</span>
                    {imdbRating} IMDb Rating
                  </p>
                  {isWatched ? (
                    <h3
                      style={{
                        padding: "10px 0px",
                        background: "#b37923",
                        textAlign: "center",
                        borderRadius: "2%",
                      }}
                    >
                      You rated this movie {watchedUserRating}
                      <span>⭐</span>
                    </h3>
                  ) : (
                    <>
                      <div className="">
                        <StarRating
                          size={32}
                          color={"white"}
                          maxRating={10}
                          onSetRating={setUserRating}
                        />
                      </div>
                      {userRating > 0 && (
                        <button className="main-btn" onClick={handleAdd}>
                          Add movie to watchlist
                        </button>
                      )}
                    </>
                  )}
                </div>
              </section>
            </div>
            <div className="detail-body">
              <p>
                <em>{plot}</em>
              </p>
              <p style={{ paddingTop: "10px" }}>Starring {actors}</p>
              <p>Directed by {director}</p>
            </div>
          </header>
        </>
      )}
    </div>
  );
}
