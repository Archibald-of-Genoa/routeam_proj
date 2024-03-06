import React from "react";
import {
  SearchContainer,
  SearchStringForm,
  SearchStringInput,
  SearchStringLabel,
} from "./Search.styled";
import { BUTTON } from "../Button";

const Search = () => {
  return (
    <>
      <SearchContainer>
        <SearchStringForm>
          <SearchStringLabel htmlFor="stringInput"></SearchStringLabel>
          <SearchStringInput
            id="stringInput"
            placeholder="Начните вводить текст для поиска (не менее трех символов)"
          ></SearchStringInput>
          <BUTTON
            type="submit"
            view="search"
            width="74px"
            height="68px"
          ></BUTTON>
        </SearchStringForm>
      </SearchContainer>
    </>
  );
};

export default Search;
