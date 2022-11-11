import { useState, useEffect } from "react";

export default function useFetch(urlToFetch) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [urlToFetch]);

  return [characters, setCharacters];
}
