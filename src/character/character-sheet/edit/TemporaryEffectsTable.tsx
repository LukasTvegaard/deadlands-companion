import styled from "styled-components";
import { Icons } from "../../../icons/Icons";
import { IconButton } from "../../../shared/buttons/IconButton";
import { TextElement } from "../../../shared/text/Text";
import { Theme } from "../../../Theme";
import { TemporaryEffect } from "../../../utils/types/TemporaryEffect";
import { tickTemporaryEffectDuration } from "../../../services/temporary-effects-service";

const EffectPill = styled.div<{ $isHarmful: boolean }>(({ $isHarmful }) => ({
  backgroundColor: $isHarmful ? Theme.Health : Theme.Stamina,
  color: "#fff",
  padding: `${Theme.Spacing.small} ${Theme.Spacing.medium}`,
  borderRadius: Theme.BorderRadius.large,
}));

const StyledTable = styled.table({
  display: "table",
  textAlign: "right",
  gap: Theme.Spacing.small,
  borderSpacing: Theme.Spacing.small,
  td: {
    width: "5%",
    "&.item-name": {
      width: "85%",
      textAlign: "left",
    },
  },
});
type Props = {
  characterId: string;
  tempEffectsList: TemporaryEffect[];
};
export const TemporaryEffectsTable: React.FC<Props> = ({
  characterId,
  tempEffectsList,
}) => {
  return (
    <StyledTable>
      <tbody>
        {tempEffectsList.map((temporaryEffect) => (
          <tr key={temporaryEffect.name + temporaryEffect.duration}>
            <td className="item-name">
              <EffectPill $isHarmful={temporaryEffect.isHarmful}>
                <TextElement title={temporaryEffect.name}>
                  {temporaryEffect.name}
                </TextElement>
              </EffectPill>
            </td>
            <td>
              <IconButton
                iconSize={16}
                icon={Icons.ChevronDown}
                onClick={() =>
                  tickTemporaryEffectDuration(
                    characterId,
                    temporaryEffect,
                    true
                  )
                }
              />
            </td>
            <td className="item-duration">
              <TextElement title={temporaryEffect.name}>
                {temporaryEffect.duration}
              </TextElement>
            </td>
            <td>
              <IconButton
                iconSize={16}
                icon={Icons.ChevronUp}
                onClick={() =>
                  tickTemporaryEffectDuration(
                    characterId,
                    temporaryEffect,
                    false
                  )
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
