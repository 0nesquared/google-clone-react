import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
  // to retrieve the state and the dispatch function from the data layer using our custom hook
  const [{}, dispatch] = useStateValue();

  // defining the state to store the user's search query
  const [input, setInput] = useState("");

  // to provide us with the browser's history
  const history = useHistory();

  /* function to act on the search query 
  - put the search term info to our data layer, so that it can be retrieved even from the SearchPage component 
  - push the user onto the search page */
  const search = (e) => {
    e.preventDefault();

    // dispatching the action to change the state's term value
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    // by pushing the search url to our history, bascically we are redirecting the client to our /search page
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__micIcon" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
