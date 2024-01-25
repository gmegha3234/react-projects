/* eslint-disable react/prop-types */
const Movie = ({ movie, onSelectMovie ,selectedId}) => {
  return (
    <li
      className={
        selectedId == movie.imdbID
          ? "selected-movie movie-list-item"
          : "movie-list-item"
      }
      key={movie.imdbID}
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img src={movie.Poster} alt="" />
      <div className="description">
        <p>{movie.Title}</p>
        <span>🗓</span>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
};
export default Movie;