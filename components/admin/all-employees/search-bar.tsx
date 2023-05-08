import React, { useContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EmployeeContext } from "@/components/admin/all-employees/all-employees.page";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(EmployeeContext);

  return (
    <div className={"relative"}>
      <label htmlFor={"search"} className={"absolute left-4 top-3"}>
        <MagnifyingGlassIcon className={"h-5 w-5"} />
      </label>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        id={"search"}
        name="search"
        className="h-11 w-2/5 rounded-lg border border-[#C2C2C2] bg-white px-10 py-4 placeholder:text-[#9E9E9E]"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;