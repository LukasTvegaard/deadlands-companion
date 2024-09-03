import styled from "styled-components";
import { Theme } from "../Theme";
import { TemporaryEffect } from "../utils/types/TemporaryEffect";
import { TemporaryEffectIndicator } from "../shared/TemporaryEffectIndicator";
import _ from "lodash";

const RowWrapper = styled.div({
  display: "flex",
  gap: Theme.Spacing.small,
  flexWrap: "wrap",
});

type Props = {
  tempEffects: TemporaryEffect[];
};
export const TemporaryEffectsRow: React.FC<Props> = ({ tempEffects }) => {
  if (tempEffects.length === 0) return null;
  const [harmful, friendly] = _.partition(
    tempEffects,
    (effect) => effect.isHarmful
  );
  return (
    <RowWrapper>
      {friendly.map((effect) => (
        <TemporaryEffectIndicator
          tempEffect={effect}
          key={effect.name + effect.duration}
        />
      ))}
      {harmful.map((effect) => (
        <TemporaryEffectIndicator
          tempEffect={effect}
          key={effect.name + effect.duration}
        />
      ))}
    </RowWrapper>
  );
};
