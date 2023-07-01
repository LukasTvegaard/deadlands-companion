import { CharacterContext } from "../DeadlandsCompanion";
import { PageHeader } from "../shared/PageHeader";
import CharacterMenu from "./CharacterMenu";
import { useContext } from "react";
import {
  getMaxPowerPoints,
  showPowerPoints,
} from "./character-logic/PowerPointLogic";
import { EdgeList } from "../static/edges/EdgeList";

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
      <div>Attributes</div>
      {character.attributes
        ? Object.entries(character.attributes).map(([key, val]) => {
            return (
              <div key={key}>
                {key}: {val}
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
