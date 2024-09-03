import styled, { css } from "styled-components";

type FlexProps = {
  $gap?: string;
};

export const FlexRow = styled.div<FlexProps>(({ $gap }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: $gap ? $gap : "0px",
}));

export const FlexCol = styled.div<FlexProps>(({ $gap }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: $gap ? $gap : "0px",
}));
