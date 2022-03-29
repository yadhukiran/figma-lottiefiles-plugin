import { useState } from "react";

import { T_Function } from "../../typings/generic";

export function useSearchInput(executeSearch: T_Function) {
  const [inputValue, setInputValue] = useState("");
  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };
  const handleEnterKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      executeSearch(inputValue);
    }
  };

  return { inputValue, handleInputValueChange, handleEnterKeyPress };
}
