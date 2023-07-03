import { CharacterContext } from "../../DeadlandsCompanion";
import { PageHeader } from "../../shared/PageHeader";
import CharacterMenu from "../CharacterMenu";
import { useContext } from "react";
import {
  getMaxPowerPoints,
  showPowerPoints,
} from "../character-logic/PowerPointLogic";
import { EdgeList } from "../../static/edges/EdgeList";
import { DiceIcon } from "../../icons/DiceIcons";
import { StyledLink } from "../../shared/StyledLink";

export const CharacterSheet = () => {
  const character = useContext(CharacterContext);

  if (!character) return null;

  console.log(EdgeList);

  return (
    <>
      <PageHeader
        pageName="Character Sheet"
        prevLocation={CharacterMenu.Location}
      />
      <div>Wounds: {character.wounds} / 4</div>
      <div>Fatigue: {character.fatigue} / 3</div>
      {showPowerPoints(character) ? (
        <div>Power Points: {getMaxPowerPoints(character)}</div>
      ) : null}
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Attributes
        <StyledLink to={"edit/attribute"}>Edit Attributes</StyledLink>
      </div>
      {character.attributes
        ? Object.entries(character.attributes).map(([key, val]) => {
            return (
              <div key={key} style={{ display: "flex", alignItems: "center" }}>
                {key}: <DiceIcon dieType={val} />
              </div>
            );
          })
        : null}
      <br />
      <div>Skills</div>
      {character.skills
        ? Object.entries(character.skills).map(([key, val]) => {
            return (
              <div key={key}>
                {key}: {val}
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
    </>
  );
};

CharacterSheet.Location = {
  path: `/character/sheet`,
  name: "Character Sheet",
};

export default CharacterSheet;
