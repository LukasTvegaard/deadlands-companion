import { styled } from "styled-components";
import { StyledLink } from "../StyledLink";
import { Theme } from "../../Theme";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";

const BackButtonStyle = styled(StyledLink)`
  display: flex;
  align-items: center;
  padding: 20px 0;
  color: ${Theme.Primary[100]};
  &:active {
    color: ${Theme.Primary[50]};
    path {
      fill: ${Theme.Primary[50]};
    }
  }
`;

type BackButtonProps = {
  to: string;
  text: string;
};
export const BackButton = ({ to, text }: BackButtonProps) => {
  return (
    <BackButtonStyle to={to}>
      <Icon
        icon={Icons.ChevronLeft}
        color={Theme.Primary[100]}
        height={24}
        width={24}
      />
      {text}
    </BackButtonStyle>
  );
};
