import styled from "styled-components";

export const CardContainer = styled.div`
  width: 440px;
  height: 218px;
  border: 1px solid #000;
  padding-top: 0.7rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const UserContainer = styled.div`
  height: 5rem;
  display: flex;

  justify-content: start;
  align-items: center;
  gap: 1.5rem;
`;

export const IMG = styled.img`
  display: flex;
  flex-basis: 5rem;
  border-radius: 50%;
`;

export const UserName = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StarWatchContainer = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: start;
  gap: 2rem;
  margin-top: 1.3rem;
`;
export const StarContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const WatchContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CommentsForm = styled.form`
  margin-top: 1.4rem;
  height: 5.4rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CommentsLabel = styled.label`
  border: none;
  flex-grow: 2;
`;

export const CommentsInput = styled.input`
  width: 100%;
  height: 54px;
  font-size: 1.6rem;
  color: #000;
  outline: none;
  display: flex;
  padding: 14px;
  padding-left: 23px;

  &::placeholder {
    font-size: 1.4rem;
  }
`;
