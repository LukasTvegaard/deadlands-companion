import { CharacterContext } from "../DeadlandsCompanion";
import { Edge } from "../utils/enums";
import { EdgeDetailType } from "../utils/interfaces";
import { useContext } from "react";
import { database } from "../utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { characterHasEdge } from "../static/edges/EdgeUtil";

const addEdge = (characterKey: string, edgeKey: Edge) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/edges/${edgeKey}`), true);
};

const removeEdge = (characterKey: string, edgeKey: Edge, edgeName: string) => {
  if (window.confirm(`Are you sure you want to remove "${edgeName}"?`)) {
    const db = database();
    set(ref(db, `characters/${characterKey}/edges/${edgeKey}`), null);
  }
};

type EdgeDetailProps = {
  edgeDetail: EdgeDetailType | undefined;
};
export const EdgeDetail = ({ edgeDetail }: EdgeDetailProps) => {
  const character = useContext(CharacterContext);

  if (!edgeDetail) {
    return <div>Edge not found</div>;
  }

  const hasEdge = character && characterHasEdge(edgeDetail.key, character);
  console.log(hasEdge);

  const addToCharacterButton = character ? (
    <button onClick={() => addEdge(character?.id, edgeDetail.key)}>
      Add edge to character
    </button>
  ) : null;
  const removeFromCharacterButton = character ? (
    <button
      onClick={() => removeEdge(character?.id, edgeDetail.key, edgeDetail.name)}
    >
      Remove edge from character
    </button>
  ) : null;

  return (
    <div>
      {edgeDetail.name}
      {hasEdge ? removeFromCharacterButton : addToCharacterButton}
    </div>
  );
};
