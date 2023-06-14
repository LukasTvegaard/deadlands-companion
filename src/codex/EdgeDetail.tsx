import { EdgeDetailType } from "../utils/interfaces";

type EdgeDetailProps = {
  edgeDetail: EdgeDetailType | undefined;
};
export const EdgeDetail = ({ edgeDetail }: EdgeDetailProps) => {
  if (!edgeDetail) {
    return <div>Edge not found</div>;
  }

  return <div>{edgeDetail.name}</div>;
};
