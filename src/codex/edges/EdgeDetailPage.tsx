import { useParams } from "react-router-dom";

import Page from "../../shared/page/Page";
import { getEdgeDetailByKey } from "../../static/edges/EdgeUtil";
import { Edge } from "../../utils/enums";
import { getEnumByString } from "../../utils/enums/EnumUtil";
import { Locations } from "../../utils/Location";
import { EdgeDetail } from "./EdgeDetail";

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
