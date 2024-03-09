import React, { useState, ChangeEvent } from "react";
import {
  SearchContainer,
  SearchStringForm,
  SearchStringInput,
  SearchStringLabel,
} from "./Search.styled";
import { BUTTON } from "../Button";
import useDebounce from "../../hooks/useDebounce";
import { useSearchRepositoriesQuery } from "../../services/githubApi";
import { Repository } from "../Card";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const debouncedSearchTerm = useDebounce(searchString, 300);

  const { data, isFetching } = useSearchRepositoriesQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm.length < 3,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };
  return (
    <>
      <SearchContainer>
        <SearchStringForm>
          <SearchStringLabel htmlFor="stringInput"></SearchStringLabel>
          <SearchStringInput
            id="stringInput"
            placeholder="Начните вводить текст для поиска (не менее трех символов)"
            value={searchString}
            onChange={handleChange}
          ></SearchStringInput>
          <BUTTON
            type="submit"
            view="search"
            width="74px"
            height="68px"
          ></BUTTON>
        </SearchStringForm>
      </SearchContainer>
      {isFetching ? <div>Загрузка...</div> : null}
      {data?.items && (
        <ul>
          {data.items.map((repo: Repository) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.full_name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;
