import { styled } from "styled-components";
import { Theme } from "../../Theme";

type ButtonStyleProps = {
  disabled?: boolean;
  $transparent?: boolean;
  $negative?: boolean;
};
export const SharedButtonStyle = styled.button<ButtonStyleProps>`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: ${(props) =>
    props.$transparent
      ? "transparent"
      : props.$negative
      ? props.disabled
        ? Theme.Error[600]
        : Theme.Error[100]
      : Theme.Primary[50]};
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

type ButtonProps = {
  text: string;
  disabled?: boolean;
  transparent?: boolean;
  negative?: boolean;
  onClick?: () => void;
};
export const Button = ({
  text,
  disabled,
  transparent,
  negative,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyle
      disabled={disabled}
      $transparent={transparent}
      $negative={negative}
      onClick={onClick}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonStyle>
  );
};
