import { styled } from "styled-components";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { Theme } from "../../Theme";

type IconButtonStyleProps = {
  $transparent?: boolean;
};
const IconButtonStyle = styled.button<IconButtonStyleProps>`
  display: flex;
  background-color: ${(props) =>
    props.$transparent ? "transparent" : Theme.Primary[50]};
  border-radius: 4px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  cursor: pointer;
  &:active {
    path {
      fill: ${Theme.Primary[400]};
    }
  }
`;

const IconButtonText = styled.div`
  color: #fff;
`;

type IconButtonProps = {
  icon: (typeof Icons)[keyof typeof Icons];
  text?: string;
  color?: string;
  transparent?: boolean;
  viewbox?: string;
  onClick?: () => void;
};
export const IconButton = ({
  icon,
  text,
  color,
  transparent,
  viewbox,
  onClick,
}: IconButtonProps) => {
  return (
    <IconButtonStyle $transparent={transparent} onClick={onClick}>
      <Icon
        height={24}
        width={24}
        color={color}
        viewbox={viewbox}
        icon={icon}
      ></Icon>
      {text ? <IconButtonText>{text}</IconButtonText> : null}
    </IconButtonStyle>
  );
};
