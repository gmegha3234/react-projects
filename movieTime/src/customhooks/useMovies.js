import { useEffect, useState } from "react";
export function useMovies(query) {
  const KEY = "613ff202";
  const [movies, setMovies] = useState([]);
  // const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
        // callback?.();
      const controller = new AbortController();
      async function FetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!response.ok) {
            throw new Error("Something went wrong with fetching movies");
          }

          const data = await response.json();
          if (data.Response == "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setIsLoading(false);
          setError("");
        } catch (err) {
          console.log(err);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      // handleCloseMovie();
      FetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
