import { Edge } from "../../utils/enums";
import { EdgeDetailType } from "../../utils/interfaces";
import { EdgeList } from "./EdgeList";

export const getEdgeDetailByKey = (
  key: Edge | undefined
): EdgeDetailType | undefined => {
  if (key) {
    const edge = EdgeList.find((edge) => edge.key === key);
    return edge;
  }
};

export const getEdgeByString = (key: string | undefined): Edge | undefined => {
  if (key) {
    const edge = Edge[key as keyof typeof Edge];
    return edge;
  }
};
