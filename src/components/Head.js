import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Suggestions } from "./Suggestions";
import { cacheResults } from "../utils/searchSlice";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO } from "./Constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();

      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    };

    const timer = setTimeout(() => {
      searchCache[searchQuery]
        ? setSuggestions(searchCache[searchQuery])
        : getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, dispatch, searchCache]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_ICON}
        />

        <a href="/">
          <img className="h-8 mx-2" alt="youtube-icon" src={YOUTUBE_LOGO} />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <input
          type="text"
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />

        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>

        {showSuggestions && <Suggestions suggestions={suggestions} />}
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
