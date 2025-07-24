import styled from "styled-components";
import { Theme } from "../Theme";

const SpacerStyle = styled.div`
  height: ${Theme.Spacing.medium};
`;

export const Spacer = () => {
  return <SpacerStyle />;
};
