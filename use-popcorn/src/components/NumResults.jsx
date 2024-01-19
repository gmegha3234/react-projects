/* eslint-disable react/prop-types */
export function NumResults({movies}){
    return (
      <div className="result-count">
        <p>Found {movies.length} results</p>
      </div>
    );
}