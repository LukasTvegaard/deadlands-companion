import { useContext, useState } from "react";
import { Potion } from "../../utils/types/Potion";
import { GivePotionModal } from "./GivePotionModal";
import { Button } from "../../shared/buttons/Button";
import { Character } from "../../utils/types/Character";
import { consumePotion } from "./PotionsService";
import { CharacterContext } from "../../DeadlandsCompanion";
import { getCharacterFullName } from "../character-logic/InfoLogic";
import { FlexCol, FlexRow } from "../../codex/shared/FlexRow";
import { Theme } from "../../Theme";
import styled from "styled-components";
import { TextElement } from "../../shared/text/Text";

const PotionRowStyle = styled.div`
  padding: 12px 8px;
  background-color: ${Theme.Surface[250]};
  border-radius: 8px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${Theme.Surface[300]};
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

const PotionPillWrapper = styled.div`
  display: flex;
  gap: ${Theme.Spacing.small};
`;

const PotionPill = styled.div`
  color: #fff;
  padding: ${Theme.Spacing.xsmall} ${Theme.Spacing.small};
  border-radius: ${Theme.BorderRadius.large};
`;

const RaisePotionPill = styled(PotionPill)`
  background-color: ${Theme.Stamina};
`;

const ExtensionsPotionPill = styled(PotionPill)`
  background-color: ${Theme.Primary[200]};
`;

type PotionRowProps = {
  potion: Potion;
  partyCharacters: Character[];
};
export const PotionRow = ({ potion, partyCharacters }: PotionRowProps) => {
  const character = useContext(CharacterContext);
  const [givePotionModalOpen, setGivePotionModalOpen] = useState(false);

  const notPossessedByCharacter = potion.possessedBy !== character.id;
  const possessedBy = partyCharacters.find((c) => c.id === potion.possessedBy);

  return (
    <PotionRowStyle>
      <FlexCol $gap={Theme.Spacing.small}>
        {givePotionModalOpen ? (
          <GivePotionModal
            potion={potion}
            partyCharacters={partyCharacters}
            onClose={() => setGivePotionModalOpen(false)}
          />
        ) : null}
        <FlexRow $gap={Theme.Spacing.small}>
          <Title>{potion.powerVariant}</Title>
          <FlexRow $gap={Theme.Spacing.small}>
            <Button
              text={"Use"}
              disabled={potion.possessedBy !== character.id}
              onClick={() => consumePotion(potion)}
            />
            <Button
              text={"Give"}
              secondary
              onClick={() => setGivePotionModalOpen(true)}
            />
          </FlexRow>
        </FlexRow>
        {possessedBy && notPossessedByCharacter ? (
          <TextElement>
            Possessed by: {getCharacterFullName(possessedBy)}
          </TextElement>
        ) : null}
        {potion.isRaise || potion.extensions ? (
          <PotionPillWrapper>
            {potion.isRaise ? <RaisePotionPill>Raise</RaisePotionPill> : null}
            {potion.extensions > 0 ? (
              <ExtensionsPotionPill>
                Extensions: {potion.extensions}
              </ExtensionsPotionPill>
            ) : null}
          </PotionPillWrapper>
        ) : null}
      </FlexCol>
    </PotionRowStyle>
  );
};
