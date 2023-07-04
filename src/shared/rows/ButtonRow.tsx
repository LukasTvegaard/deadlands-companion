import { Icons } from "../../icons/Icons";
import { IconButton } from "../buttons/IconButton";
import { RowStyle } from "./Row.styled";

type ButtonRowProps = {
  label: string;
  onClick?: () => void;
};
export const ButtonRow = ({ label, onClick }: ButtonRowProps) => {
  return (
    <RowStyle>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{label}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {onClick ? <IconButton onClick={onClick} icon={Icons.Add} /> : null}
        </div>
      </div>
    </RowStyle>
  );
};
