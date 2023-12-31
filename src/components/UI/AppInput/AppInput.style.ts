import styled from "styled-components"

export const StyledInput = styled.input`
  padding: 12px 15px;
  background-color: var(--bgc);
  border-radius: 10px;
  border: 1px solid transparent;
  color:white;

  &:is(:hover, :focus) {
    border-color: var(--prime-color);
  }

`