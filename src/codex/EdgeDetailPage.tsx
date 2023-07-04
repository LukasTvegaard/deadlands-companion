import { getEdgeByString, getEdgeDetailByKey } from "../static/edges/EdgeUtil";
import { useParams } from "react-router-dom";
import { EdgeDetail } from "./EdgeDetail";
import EdgePage from "./EdgePage";
import Page from "../shared/page/Page";

export const EdgeDetailPage = () => {
  const routeParams = useParams();
  const edgeParam = getEdgeByString(routeParams?.id);
  const edgeDetail = getEdgeDetailByKey(edgeParam);

  return (
    <Page
      pageName={edgeDetail ? edgeDetail.name : ""}
      prevLocation={EdgePage.Location}
    >
      <EdgeDetail edgeDetail={edgeDetail} />
    </Page>
  );
};
