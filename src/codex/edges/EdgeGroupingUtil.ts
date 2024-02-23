import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";

export enum EdgeGroupingType {
  Rank = "Rank",
  Category = "Category",
  NoGrouping = "No grouping",
}

export function getGroupingFunctionFromGroupingType(
  groupingType: EdgeGroupingType | null
) {
  switch (groupingType) {
    case EdgeGroupingType.Rank:
      return (edgeDetail: EdgeDetailType) => edgeDetail.rank_requirement;
    case EdgeGroupingType.Category:
      return (edgeDetail: EdgeDetailType) => edgeDetail.category;
    case EdgeGroupingType.NoGrouping:
      return (edgeDetail: EdgeDetailType) => "none";
  }
}
