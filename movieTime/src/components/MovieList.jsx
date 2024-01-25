/* eslint-disable react/prop-types */
import Movie from "./Movie";
function MovieList({ movies, onSelectMovie, selectedId  }) {
  return (
    <ul className="movie-list">
      {movies.map((movieData) => {
        return (
          <Movie
            key={movieData.imdbID}
            movie={movieData}
            onSelectMovie={onSelectMovie}
            selectedId={selectedId}
          ></Movie>
        );
      })}
    </ul>
  );
}
export default MovieList;



