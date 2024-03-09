import styled from "styled-components";

export const CardsContainer = styled.div`
  padding-top: 3.4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.3rem 2.8rem;

`

export const SearchContainer = styled.div`
  height: 147px;
  background-color: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchStringForm = styled.form`
  max-width: 1376px;
  width: 100%;
  height: 6.8rem;
  display: flex;
  justify-content: space-between;
`;

export const SearchStringLabel = styled.label`
  border: none;
  flex-grow: 2;

`;

export const SearchStringInput = styled.input`
  width: 100%;
  height: 68px;
  font-size: 1.6rem;
  color: #000;
  outline: none;
  display: flex;
  padding: 14px;
  padding-left: 23px;
  border: none;

  &::placeholder {
    font-size: 1.4rem;
  }
`;
