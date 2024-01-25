/* eslint-disable react/prop-types */

function Main({children}) {
  return (
    <main className="main">
      {children}
      {/* <MovieListBox movieListData={movieListData}></MovieListBox>
      <MovieWatchedBox movieWatchedData={movieWatchedData}></MovieWatchedBox> */}
    </main>
  );
}
export default Main;