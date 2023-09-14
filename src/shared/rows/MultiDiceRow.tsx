import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { DieType } from "../../utils/enums";
import { DiceIcon } from "../../icons/DiceIcons";

const MultiRowWrapper = styled.div`
  border-top: 1px solid ${Theme.Surface[400]};
`;

const MultiDiceRowStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

type MultiDiceRowProps = {
  label: string;
  dieTypes: DieType[];
  modifier?: number;
};
export const MultiDiceRow = ({
  label,
  dieTypes,
  modifier,
}: MultiDiceRowProps) => {
  return (
    <MultiRowWrapper key={label}>
      <MultiDiceRowStyle>
        {label}:
        <div style={{ display: "flex", alignItems: "center" }}>
          {dieTypes.map((dieType, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                {index > 0 ? "+" : null}
                <DiceIcon size={30} dieType={dieType} />
              </div>
            );
          })}
          {modifier && modifier > 0 ? "+" : null}
          {modifier ? modifier : null}
        </div>
      </MultiDiceRowStyle>
    </MultiRowWrapper>
  );
};
