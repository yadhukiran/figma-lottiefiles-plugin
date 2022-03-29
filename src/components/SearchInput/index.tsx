import React from "react";
import { T_SearchInputComponentProps } from "../../typings/search";
import { useSearchInput } from "./hooks";

function SearchInput(props: T_SearchInputComponentProps) {
  const { inputValue, handleInputValueChange, handleEnterKeyPress } =
    useSearchInput(props.executeSearch);

  return (
    <div className="relative">
      <span
        onClick={() => props.executeSearch(inputValue)}
        className="absolute top-1/3 -mt-2 left-12 bg-slate-100 p-3 hover:bg-slate-200 hover:cursor-pointer rounded"
      >
        <svg
          width="12"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.333 7.333h-.526l-.187-.18a4.314 4.314 0 001.047-2.82 4.333 4.333 0 10-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
            fill="#000"
            fillOpacity=".5"
          ></path>
        </svg>
      </span>
      <input
        className="w-10/12 shadow-lg border rounded bg-white focus:bg-white pl-14 px-5 py-4"
        autoFocus
        type="search"
        placeholder="Search LottieFiles..."
        value={inputValue}
        onChange={handleInputValueChange}
        onKeyUp={handleEnterKeyPress}
      />
    </div>
  );
}

export default SearchInput;
