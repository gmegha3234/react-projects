function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1>
          {" "}
          <span>🍿</span>
           movieTime
        </h1>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search movies"/>
      </div>
      <div className="result-count">
        <p>Found 3 results</p>
      </div>
    </nav>
  );
}
export default Navbar;
