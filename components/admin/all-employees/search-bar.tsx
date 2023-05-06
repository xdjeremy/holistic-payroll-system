import React from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const SearchBar = () => {
    return (
      <div className={"relative"}>
        <label htmlFor={'search'} className={"absolute top-3 left-4"}>
            <MagnifyingGlassIcon className={"h-5 w-5"}/>
        </label>
            <input
              type="search"
              id={'search'}
              name="search"
              className="w-2/5 h-11 rounded-lg border border-[#C2C2C2] bg-white px-10 py-4 placeholder:text-[#9E9E9E]"
              placeholder="Search"
            />
      </div>
    );
};

export default SearchBar;