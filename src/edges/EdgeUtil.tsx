import { Edge } from "../utils/enums";
import { EdgeList } from "./EdgeList";

export const getEdgeDetailByKey = (key: Edge) => {
  const edge = EdgeList.find((edge) => edge.key === key);
  return edge;
};

export const getEdgeByString = (key: string) => {
  const edge2 = Edge[key as keyof typeof Edge];
  return edge2;
};
