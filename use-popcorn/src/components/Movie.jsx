/* eslint-disable react/prop-types */
const Movie = ({ movie }) => {
  return (
    <li key={movie.imdbID}>
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