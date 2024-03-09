import styled, { css } from "styled-components";
import searchIcon from "../../assets/search.png";
import editIcon from "../../assets/edit.png";
import arrowIcon from "../../assets/arrow.png";

type ButtonProps = {
  view: "search" | "edit" | "arrow" | "pageNumber";
  width?: string;
  height?: string;
  direction?: "right" | "left";
  active?: boolean;
};

export const BUTTON = styled.button<ButtonProps>`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  background-color: ${({ view, theme, active }) =>
    view === "pageNumber" ? "transparent" : theme.colors.primary};

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.primary};
      color: white;
    `}

  ${({ direction }) =>
    direction === "left"
      ? css`
          background-image: url(${arrowIcon});
          transform: rotate(0deg);
        `
      : direction === "right"
      ? css`
          background-image: url(${arrowIcon});
          transform: rotate(180deg);
        `
      : ""}

  ${({ view }) => {
    switch (view) {
      case "search":
        return css`
          background-image: url(${searchIcon});
        `;
      case "edit":
        return css`
          background-image: url(${editIcon});
        `;
      case "pageNumber":
        return css`
          &:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
          }
        `;
      case "arrow":
        return css`
          background-color: transparent; 
        `;
    }
  }}

  &:hover {
    ${({ direction }) =>
      direction === "left"
        ? css`
            transform: scale(1.1) rotate(0deg);
          `
        : direction === "right"
        ? css`
            transform: scale(1.1) rotate(180deg);
          `
        : css`
            transform: scale(1.1);
          `}
  }
`;
