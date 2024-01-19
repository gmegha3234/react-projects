/* eslint-disable react/prop-types */
const WatchedMovie =({movie})=>{
    return (
      <li>
        <img src={movie.Poster} alt="" />
        <div className="description">
          <p>{movie.Title}</p>
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
      </li>
    );
   
}
export default WatchedMovie;