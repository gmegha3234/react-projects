/* eslint-disable react/prop-types */
const WatchedMovie = ({ movie, onDeleteWatch }) => {
  return (
    <li>
      <img src={movie.poster} alt="" />
      <div className="description">
        <p>{movie.title}</p>
        <div className="ratings rating-list">
          <p>
            <span>⭐️ </span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟 </span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳ </span>
            <span>{movie.runtime}min</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => onDeleteWatch(movie.imdbID)}
        className="main-btn"
        style={{ margin: "auto", padding: "2px 7px" }}
      >
        X
      </button>
    </li>
  );
};
export default WatchedMovie;
