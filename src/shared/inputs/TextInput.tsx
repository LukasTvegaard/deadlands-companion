import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { FlexCol } from "../../codex/shared/FlexRow";

export const StyledInput = styled.input({
  padding: Theme.Spacing.small,
  borderRadius: Theme.BorderRadius.small,
  fontSize: "16px",
  border: "none",
});

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export const TextInput: React.FC<Props> = ({ label, ...props }) => {
  return (
    <FlexCol $gap={Theme.Spacing.small}>
      {label && <label>{label}</label>}
      <StyledInput {...props} />
    </FlexCol>
  );
};
