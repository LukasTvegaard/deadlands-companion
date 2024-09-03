import { styled } from "styled-components";
import { TemporaryEffect } from "../utils/types/TemporaryEffect";
import { Theme } from "../Theme";
import { TextElement } from "./text/Text";

const EffectPill = styled.div<{ $isHarmful: boolean }>(({ $isHarmful }) => ({
  display: "flex",
  alignItems: "center",
  gap: Theme.Spacing.small,
  backgroundColor: $isHarmful ? Theme.Health : Theme.Stamina,
  padding: "4px 8px",
  borderRadius: Theme.BorderRadius.large,
}));

const DurationBubble = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: Theme.Surface[200],
  color: Theme.Text[500],
  padding: "4px",
  width: 24,
  height: 24,
  borderRadius: "50%",
});

type Props = {
  tempEffect: TemporaryEffect;
};
export const TemporaryEffectIndicator: React.FC<Props> = ({ tempEffect }) => {
  return (
    <EffectPill $isHarmful={tempEffect.isHarmful}>
      <TextElement>{tempEffect.name}</TextElement>
      <DurationBubble>{tempEffect.duration}</DurationBubble>
    </EffectPill>
  );
};
