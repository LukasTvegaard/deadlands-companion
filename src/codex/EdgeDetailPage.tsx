import { getEdgeDetailByKey } from "../static/edges/EdgeUtil";
import { useParams } from "react-router-dom";
import { EdgeDetail } from "./EdgeDetail";
import Page from "../shared/page/Page";
import { getEnumByString } from "../utils/enums/EnumUtil";
import { Edge } from "../utils/enums";
import { Locations } from "../utils/Location";

export const EdgeDetailPage = () => {
  const routeParams = useParams();
  const edgeParam = getEnumByString(routeParams.id, Edge);
  const edgeDetail = getEdgeDetailByKey(edgeParam);

  return (
    <Page
      pageName={edgeDetail ? edgeDetail.name : ""}
      prevLocation={Locations.EdgePage}
    >
      <EdgeDetail edgeDetail={edgeDetail} />
    </Page>
  );
};
