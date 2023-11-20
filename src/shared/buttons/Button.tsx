import { styled } from "styled-components";
import { Theme } from "../../Theme";

type ButtonStyleProps = {
  disabled?: boolean;
  $transparent?: boolean;
  $negative?: boolean;
  $secondary?: boolean;
  $customColor?: string;
};
const getButtonColor = ({
  disabled,
  $transparent,
  $negative,
  $secondary,
  $customColor,
}: ButtonStyleProps) => {
  if ($customColor) {
    return $customColor;
  }

  if ($transparent) {
    return "transparent";
  }

  if ($negative) {
    if (disabled) return Theme.Error[600];
    return Theme.Error[100];
  }

  if (disabled) {
    return Theme.Surface[600];
  }

  if ($secondary) {
    return Theme.Secondary[200];
  }

  return Theme.Primary[50];
};
export const SharedButtonStyle = styled.button<ButtonStyleProps>`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: ${(props) => getButtonColor(props)};
  border-radius: 4px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const ButtonStyle = styled(SharedButtonStyle)``;

const ButtonText = styled.div`
  color: #fff;
`;

interface ButtonProps extends ButtonStyleProps {
  text: string;
  disabled?: boolean;
  transparent?: boolean;
  negative?: boolean;
  secondary?: boolean;
  customcolor?: string;
  onClick?: () => void;
}
export const Button = ({
  text,
  disabled,
  transparent,
  negative,
  secondary,
  customcolor,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyle
      disabled={disabled}
      $transparent={transparent}
      $negative={negative}
      $secondary={secondary}
      $customColor={customcolor}
      onClick={onClick}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonStyle>
  );
};
