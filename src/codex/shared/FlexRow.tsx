import styled, { css } from "styled-components";

type FlexRowProps = {
  $gap?: number;
};
export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ $gap }) =>
    css`
      gap: ${$gap ? `${$gap}px` : `0px`};
    `}
`;
