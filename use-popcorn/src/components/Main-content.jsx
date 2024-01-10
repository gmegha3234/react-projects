function MainContent({ tempMovieData }) {
 return (
   <div className="main">
     <div className="box" style={{ marginLeft: "auto" }}>
       <button className="main-btn">+</button>
       <ul className="movie-list">
         <li>
           <img
             src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
             alt=""
           />

           <div className="description">
             <p>Inception</p>
             <span>🗓</span>
             <span>{2010}</span>
           </div>
         </li>
         <li>
           <img
             src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
             alt=""
           />

           <div className="description">
             <p>Inception</p>
             <span>🗓</span>
             <span>{2010}</span>
           </div>
         </li>
       </ul>
     </div>
     <div className="box" style={{ marginRight: "auto" }}>
       <button className="main-btn">+</button>
       <ul className="movie-list">
         <li className="movies-watched">
           <p style={{ textAlign: "center", fontSize: "18px" }}>
             MOVIES YOU WATCHED
           </p>
           <div className="ratings">
             <p>
               <span>#️⃣ </span>
               <span>2 movies</span>
             </p>
             <p>
               <span>⭐️ </span>
               <span>8.65</span>
             </p>
             <p>
               <span>🌟 </span>
               <span>9.5</span>
             </p>
             <p>
               <span>⏳ </span>
               <span>132 min</span>
             </p>
           </div>
         </li>
         <li>
           <img
             src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
             alt=""
           />

           <div className="description">
             <p>Inception</p>
             <div className="ratings rating-list">
               <p>
                 <span>⭐️ </span>
                 <span>8.65</span>
               </p>
               <p>
                 <span>🌟 </span>
                 <span>9.5</span>
               </p>
               <p>
                 <span>⏳ </span>
                 <span>132 min</span>
               </p>
             </div>
           </div>
         </li>
         <li>
           <img
             src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
             alt=""
           />

           <div className="description">
             <p>Inception</p>
             <div className="ratings rating-list">
               <p>
                 <span>⭐️ </span>
                 <span>8.65</span>
               </p>
               <p>
                 <span>🌟 </span>
                 <span>9.5</span>
               </p>
               <p>
                 <span>⏳ </span>
                 <span>132 min</span>
               </p>
             </div>
           </div>
         </li>
       </ul>
     </div>
   </div>
 );
}
export default MainContent;