/* eslint-disable react/prop-types */
import WatchedMovie from "./WatchedMovie";
function WatchedMoviesList({watched }) {
  return (
      <ul className="movie-list">
        {watched.map((movieData) => {
          return (
            <WatchedMovie key={movieData.imdbID} movie={movieData} />
          );
        })}
      </ul>
  );
}
export default WatchedMoviesList;
