function WatchedSummary({watched}){
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
   return (
     <li className="movies-watched">
       <p style={{ textAlign: "center", fontSize: "18px" }}>
         MOVIES YOU WATCHED
       </p>
       <div className="ratings">
         <p>
           <span>#️⃣ </span>
           <span>{watched.length} movies</span>
         </p>
         <p>
           <span>⭐️ </span>
           <span>{avgImdbRating}</span>
         </p>
         <p>
           <span>🌟 </span>
           <span>{avgUserRating}</span>
         </p>
         <p>
           <span>⏳ </span>
           <span>{avgRuntime} min</span>
         </p>
       </div>
     </li>
   );
}
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
export default WatchedSummary;