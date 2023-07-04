import { CharacterContext } from "../../DeadlandsCompanion";
import CharacterMenu from "../CharacterMenu";
import { useContext } from "react";
import {
  getMaxPowerPoints,
  showPowerPoints,
} from "../character-logic/PowerPointLogic";
import { EdgeList } from "../../static/edges/EdgeList";
import { DiceIcon } from "../../icons/DiceIcons";
import { StyledLink } from "../../shared/StyledLink";
import Page from "../../shared/page/Page";
import { Skill, getSkillName } from "../../utils/enums";
import { IconButton } from "../../shared/buttons/IconButton";
import { Icons } from "../../icons/Icons";

export const CharacterSheet = () => {
  const character = useContext(CharacterContext);

  if (!character) return null;

  return (
    <Page pageName="Character Sheet" prevLocation={CharacterMenu.Location}>
      <div>Wounds: {character.wounds} / 4</div>
      <div>Fatigue: {character.fatigue} / 3</div>
      {showPowerPoints(character) ? (
        <div>
          Power Points: {character.currentPowerPoints} /{" "}
          {getMaxPowerPoints(character)}
        </div>
      ) : null}
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Attributes
        <StyledLink to={"edit/attribute"}>
          <IconButton icon={Icons.Pen} />
        </StyledLink>
      </div>
      {character.attributes
        ? Object.entries(character.attributes).map(([key, val]) => {
            return (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #a1a1a1",
                }}
              >
                {key}: <DiceIcon size={30} dieType={val} />
              </div>
            );
          })
        : null}
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Skills
        <StyledLink to={"edit/skill"}>
          <IconButton icon={Icons.Pen} />
        </StyledLink>
      </div>
      {character.skills
        ? Object.entries(character.skills).map(([key, val]) => {
            return (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "8px",
                  marginBottom: "8px",
                  borderBottom: "1px solid #a1a1a1",
                }}
              >
                {getSkillName(key as Skill)}:
                <DiceIcon size={30} dieType={val} />
              </div>
            );
          })
        : null}
      <br />
      <div>Edges</div>
      {character.edges
        ? Object.keys(character.edges).map((edgeKey) => {
            const edgeDetail = EdgeList.find((e) => e.key === edgeKey);
            return (
              <div key={edgeKey}>
                {edgeDetail?.name}: {edgeDetail?.description_short}
              </div>
            );
          })
        : null}
    </Page>
  );
};

CharacterSheet.Location = {
  path: `/character/sheet`,
  name: "Sheet",
};

export default CharacterSheet;
