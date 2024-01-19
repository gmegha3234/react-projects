/* eslint-disable react/prop-types */
import Movie from "./Movie";
function MovieList({ movies }) {
  return (
      <ul className="movie-list">
        {movies.map((movieData) => {
          return (
            <Movie
              key={movieData.imdbID}
              movie={movieData}
            ></Movie>
          );
        })}
      </ul>
  );
}
export default MovieList;



