import { styled } from "styled-components";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { Theme } from "../../Theme";
import { SharedButtonStyle } from "./Button";

const IconButtonStyle = styled(SharedButtonStyle)`
  gap: 8px;
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
  iconSize?: number;
  color?: string;
  secondary?: boolean;
  negative?: boolean;
  transparent?: boolean;
  viewbox?: string;
  onClick?: () => void;
};
export const IconButton = ({
  icon,
  text,
  iconSize,
  color,
  secondary,
  negative,
  transparent,
  viewbox,
  onClick,
}: IconButtonProps) => {
  return (
    <IconButtonStyle
      $transparent={transparent}
      $secondary={secondary}
      $negative={negative}
      onClick={onClick}
    >
      <Icon
        height={iconSize ?? 24}
        width={iconSize ?? 24}
        color={color}
        viewbox={viewbox}
        icon={icon}
      ></Icon>
      {text ? <IconButtonText>{text}</IconButtonText> : null}
    </IconButtonStyle>
  );
};
