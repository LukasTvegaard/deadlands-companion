import React from "react";
import { Edge } from "../utils/interfaces";

type EdgeDetailProps = {
  edge: Edge;
};

export const EdgeDetail = ({ edge }: EdgeDetailProps) => {
  return <div>{edge.description}</div>;
};
