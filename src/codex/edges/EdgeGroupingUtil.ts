import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";

export enum EdgeGroupingType {
  Rank = "Rank",
  Category = "Category",
  NoGrouping = "No grouping",
}

export function getGroupingFunctionFromGroupingType(
  groupingType: EdgeGroupingType | null
): (edgeDetail: EdgeDetailType) => string {
  switch (groupingType) {
    case EdgeGroupingType.Rank:
      return (edgeDetail: EdgeDetailType) => edgeDetail.rank_requirement;
    case EdgeGroupingType.Category:
      return (edgeDetail: EdgeDetailType) => edgeDetail.category;
    case EdgeGroupingType.NoGrouping:
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return (_: EdgeDetailType) => "none";
  }
}
