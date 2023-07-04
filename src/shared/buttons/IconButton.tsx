import { styled } from "styled-components";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { Theme } from "../../Theme";

const IconButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:active {
    path {
      fill: ${Theme.Primary[400]};
    }
  }
`;

type IconButtonProps = {
  icon: (typeof Icons)[keyof typeof Icons];
  color?: string;
  onClick?: () => void;
};
export const IconButton = ({ icon, color, onClick }: IconButtonProps) => {
  return (
    <IconButtonStyle onClick={onClick}>
      <Icon height={24} width={24} color={color} icon={icon}></Icon>
    </IconButtonStyle>
  );
};
