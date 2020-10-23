import { useState, useEffect } from "react";
import API_KEY from "./keys";

const SEARCH_ENGINE_ID = "55c0c4e88da67a4b3";

// custom hook to return data from the Google Search
export const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // function to be fired off whenever the term value changes
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};
