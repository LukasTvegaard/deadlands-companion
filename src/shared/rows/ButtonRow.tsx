import styled from "styled-components";
import { Theme } from "../../Theme";
import { Icons } from "../../icons/Icons";
import { IconButton } from "../buttons/IconButton";
import { RowStyle } from "./Row.styled";

const SecondaryLabel = styled.span`
  margin-left: 8px;
  color: ${Theme.Mixed[600]};
`;

type ButtonRowProps = {
  label: string;
  secondaryLabel?: string;
  isRemove?: boolean;
  onClick?: () => void;
};
export const ButtonRow = ({
  label,
  secondaryLabel,
  isRemove,
  onClick,
}: ButtonRowProps) => {
  return (
    <RowStyle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          {label}
          {secondaryLabel ? (
            <SecondaryLabel>{secondaryLabel}</SecondaryLabel>
          ) : null}
        </div>
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
