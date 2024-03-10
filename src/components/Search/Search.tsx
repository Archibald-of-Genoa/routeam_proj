import React, { useState, ChangeEvent, useEffect } from "react";
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
import Card from "../Card/Card";
import { CardsContainer } from "./Search.styled";
import ItemsPerPageSelector from "../ItemsPerPageSelector/ItemsPerPageSelector";
import Paginator from "../Paginator/Paginator";

const Search = () => {
  const [searchString, setSearchString] = useState(() => localStorage.getItem("searchString") || "");
  const debouncedSearchTerm = useDebounce(searchString, 300);
  const [perPage, setPerPage] = useState(() => Number(localStorage.getItem("perPage")) || 10);
  const [page, setPage] = useState(() => Number(localStorage.getItem("page")) || 1);;

  const { data, isFetching } = useSearchRepositoriesQuery(
    { searchTerm: debouncedSearchTerm, perPage, page },
    { skip: debouncedSearchTerm.length < 3 }
  );

  useEffect(() => {
    localStorage.setItem("searchString", searchString);
    localStorage.setItem("perPage", perPage.toString());
    localStorage.setItem("page", page.toString());
  }, [searchString, perPage, page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
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
      {data && (
        <>
          <CardsContainer perPage={perPage}>
            {data.items.map((repo: Repository) => (
              <Card key={repo.id} repo={repo} />
            ))}
          </CardsContainer>
          <Paginator currentPage={page} onChange={handlePageChange} />
        </>
      )}

      <ItemsPerPageSelector value={perPage} onChange={handlePerPageChange} />
    </>
  );
};

export default Search;
