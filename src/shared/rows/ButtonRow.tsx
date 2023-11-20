import { Theme } from "../../Theme";
import { Icons } from "../../icons/Icons";
import { IconButton } from "../buttons/IconButton";
import { RowStyle } from "./Row.styled";

type ButtonRowProps = {
  label: string;
  isRemove?: boolean;
  onClick?: () => void;
};
export const ButtonRow = ({ label, isRemove, onClick }: ButtonRowProps) => {
  return (
    <RowStyle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{label}</div>
        <div>
          {onClick ? (
            isRemove ? (
              <IconButton
                transparent
                onClick={onClick}
                color={Theme.Error[100]}
                icon={Icons.TrashCan}
              />
            ) : (
              <IconButton onClick={onClick} icon={Icons.Add} transparent />
            )
          ) : null}
        </div>
      </div>
    </RowStyle>
  );
};
