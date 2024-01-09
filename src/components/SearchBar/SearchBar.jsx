import React from "react";
import search from "../../assets/search.svg";

const SearchBar = () => {
  return (
    <div className="w-[400px] focus-within:outline focus-within:outline-primary-blue bg-black-95 rounded-md py-[9px] px-4 flex gap-2 items-center outline-2">
      <img src={search} alt="help" />
      <input
        className="outline-none w-full bg-black-95 body-1-regular placeholder:text-black-50 text-black-12"
        placeholder="Search features, tutorials, etc."
      />
    </div>
  );
};

export default SearchBar;
