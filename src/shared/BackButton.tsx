import { styled } from "styled-components";
import { StyledLink } from "./StyledLink";
import { Theme } from "../Theme";

const BackButtonStyle = styled(StyledLink)`
  padding: 20px 0;
  color: ${Theme.Primary[100]};
  &:active {
    color: ${Theme.Primary[50]};
  }
`;

type BackButtonProps = {
  to: string;
  text: string;
};
export const BackButton = ({ to, text }: BackButtonProps) => {
  return <BackButtonStyle to={to}>{`< ${text}`}</BackButtonStyle>;
};
