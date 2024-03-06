import styled, { css } from "styled-components";
import searchIcon from "../../assets/search.png";
import editIcon from "../../assets/edit.png";
import { theme } from "../../theme";

type Props = {
  view: "search" | "edit" | "pageNumber";
  width?: string;
  height?: string;
};





export const BUTTON = styled.button<Props>`
  background: none;
  border: none;
  outline: none;
  padding: 0;


  cursor: pointer;
  width: ${({ width }) => width || "auto"}; 
  height: ${({ height }) => height || "100%"};

  ${({ view }) => {
    const searchCss = css`
      background-image: url(${searchIcon});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-color: ${({ theme }) => theme.colors.primary};

    `;

    const editCss = css`
      background-image: url(${editIcon});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-color: ${({ theme }) => theme.colors.primary};
    `;

    const pageNumber = css`
      background-color: ${({ theme }) => theme.colors.primary};
      background-position: center;
    `;

    if (view === "search") {
      return css`
        ${searchCss}
        &:hover {
          transform: scale(1.1);
        }
      `;
    }

    if (view === "edit") {
      return css`
        ${editCss}
        &:hover {
          transform: scale(1.1);
        }
      `;
    }

    if (view === "pageNumber") {
      return css`
        ${pageNumber}
        &:hover {
          transform: scale(1.1);
        }
      `;
    }
  }}
`;
