import styled, { css } from "styled-components";
import { BUTTON } from "../Button";
import arrow from '../../assets/arrow.svg'

export const PaginatorContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    
    & > button {
        width: 52px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #A2A3A4;
    }
`;


export const PageButton = styled(BUTTON)`
    ${({ active }) => active && css`
        font-weight: bold;
        text-decoration: underline;
    `}
`;
