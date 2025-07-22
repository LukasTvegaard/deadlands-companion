import { useContext, useState } from "react";
import { Potion } from "../../utils/types/Potion";
import { GivePotionModal } from "./GivePotionModal";
import { getPowerDetailByKey } from "../../static/powers/PowerUtil";
import { Button } from "../../shared/buttons/Button";
import { Character } from "../../utils/types/Character";
import { consumePotion } from "./PotionsService";
import { CharacterContext } from "../../DeadlandsCompanion";

type PotionRowProps = {
  potion: Potion;
  partyCharacters: Character[];
};
export const PotionRow = ({ potion, partyCharacters }: PotionRowProps) => {
  const character = useContext(CharacterContext);
  const [givePotionModalOpen, setGivePotionModalOpen] = useState(false);

  const powerDetail = getPowerDetailByKey(potion.power);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
      }}
    >
      {givePotionModalOpen ? (
        <GivePotionModal
          potion={potion}
          partyCharacters={partyCharacters}
          onClose={() => setGivePotionModalOpen(false)}
        />
      ) : null}
      <div>{powerDetail?.name}</div>
      <div>{potion.isRaise ? "Raise" : "Normal"}</div>
      <div>{potion.possessedBy}</div>
      <Button
        text={"Use"}
        disabled={potion.possessedBy !== character.id}
        onClick={() => consumePotion(potion)}
      />
      <Button text={"Give"} onClick={() => setGivePotionModalOpen(true)} />
    </div>
  );
};
