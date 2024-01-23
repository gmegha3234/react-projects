
export const Search = ({query, setQuery}) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        placeholder="Search movies"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};