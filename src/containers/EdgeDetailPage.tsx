import React from "react";
import { EdgeDetail } from "../utils/interfaces";

type EdgeDetailPageProps = {
  edgeDetail: EdgeDetail;
};

export const EdgeDetailPage = ({ edgeDetail }: EdgeDetailPageProps) => {
  console.log(edgeDetail);
  return <div>Edge detail</div>;
};
