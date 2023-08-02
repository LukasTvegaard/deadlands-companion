import { css, styled } from "styled-components";
import { StyledLink } from "../StyledLink";
import { Theme } from "../../Theme";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { useNavigate } from "react-router-dom";

export const NavigateBackRoute = "back";

const BackButtonStyle = css`
  display: flex;
  align-items: center;
  padding: 20px 0;
  color: ${Theme.Primary[100]};
  &:hover {
    color: ${Theme.Primary[50]};
    path {
      fill: ${Theme.Primary[50]};
    }
  }
`;

const BackButtonLink = styled(StyledLink)`
  ${BackButtonStyle};
`;

const BackButtonButton = styled.button`
  ${BackButtonStyle};
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

type BackButtonProps = {
  to: string;
  text: string;
};
export const BackButton = ({ to, text }: BackButtonProps) => {
  const navigate = useNavigate();
  return to === NavigateBackRoute ? (
    <BackButtonButton onClick={() => navigate(-1)}>
      <Icon
        icon={Icons.ChevronLeft}
        color={Theme.Primary[100]}
        height={24}
        width={24}
      />
      {text}
    </BackButtonButton>
  ) : (
    <BackButtonLink to={to}>
      <Icon
        icon={Icons.ChevronLeft}
        color={Theme.Primary[100]}
        height={24}
        width={24}
      />
      {text}
    </BackButtonLink>
  );
};
