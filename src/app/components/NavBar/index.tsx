"use client";

import React from "react";
import Menu from "../Menu";
import SearchIcon from "../icons/search";
import HeartIcon from "../icons/heart";

const NavBar = () => {
  const [searchedText, setSearchedText] = React.useState<string>("");
  const formatedSearchText = searchedText.split(" ").join("-");

  return (
    <div className="flex ">
      <Menu />
      <div className="search-bar">
        <input
          className="search-bar-input"
          id="search-bar"
          onChange={(e) => setSearchedText(e.target.value)}
          placeholder="O que está procurando?"
          type="text"
          name="search-bar"
        />
      </div>
      <div className="icons">
        <a href={`search/${formatedSearchText}`}>
          <SearchIcon />
        </a>
        <a href="my-favorites">
          <HeartIcon height={20} width={20} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
