/* eslint-disable react/prop-types */
import WatchedMovie from "./WatchedMovie";
function WatchedMoviesList({ watched, onDeleteWatch }) {
  return (
    <ul className="movie-list ">
      {watched.map((movieData) => {
        return (
          <WatchedMovie
            key={movieData.imdbID}
            movie={movieData}
            onDeleteWatch={onDeleteWatch}
          />
        );
      })}
    </ul>
  );
}
export default WatchedMoviesList;
