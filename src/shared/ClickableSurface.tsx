import { css } from "styled-components";
import { Theme } from "../Theme";

export const ClickableSurface = css`
  border-radius: 4px;
  &:hover {
    background-color: ${Theme.Surface[300]};
  }
`;
