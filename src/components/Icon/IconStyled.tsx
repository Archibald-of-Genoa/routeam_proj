import styled from "styled-components";

import { Props } from "./types";

export const IconStyled = styled.span<Omit<Props, 'name'>>`
  align-items: center;
  display: inline-flex;
  justify-content: center;
 
`
