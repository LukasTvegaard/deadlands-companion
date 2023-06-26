import { getEdgeByString, getEdgeDetailByKey } from "../static/edges/EdgeUtil";
import { useParams } from "react-router-dom";
import { PageHeader } from "../shared/PageHeader";
import { EdgeDetail } from "./EdgeDetail";

export const EdgeDetailPage = () => {
  const routeParams = useParams();
  const edgeParam = getEdgeByString(routeParams?.id);
  const edgeDetail = getEdgeDetailByKey(edgeParam);

  return (
    <>
      <PageHeader
        pageName={edgeDetail ? edgeDetail.name : ""}
        prevLocation={{ path: "/codex/edges", name: "Edges" }}
      />
      <EdgeDetail edgeDetail={edgeDetail} />
    </>
  );
};
