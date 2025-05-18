import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <>
      <div className="searchBox position-relative d-lg-block d-none">
        <IoSearch className="searchIcon" />
        <input type="text" placeholder="search here..." />
      </div>
    </>
  );
};

export default SearchBox;
