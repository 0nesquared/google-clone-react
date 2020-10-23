import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import { useGoogleSearch } from "../useGoogleSearch";
import response from "../sampleResponse";

function SearchPage() {
  // retrieving the search term value from the data layer
  const [{ term }, dispatch] = useStateValue();

  // retrieving the search results data from Google
  // LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = response;
  console.log(response);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
