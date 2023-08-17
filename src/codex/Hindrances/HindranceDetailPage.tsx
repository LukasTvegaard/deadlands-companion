import { useParams } from "react-router-dom";

import Page from "../../shared/page/Page";
import { getEnumByString } from "../../utils/enums/EnumUtil";
import { Locations } from "../../utils/Location";
import { Hindrance } from "../../utils/enums/Hindrance";
import { getHindranceDetailByKey } from "../../static/hindrances/HindranceUtil";
import { HindranceDetail } from "./HindranceDetail";

export const HindranceDetailPage = () => {
  const routeParams = useParams();
  const hindranceParam = getEnumByString(routeParams.id, Hindrance);
  const hindranceDetail = getHindranceDetailByKey(hindranceParam);

  return (
    <Page
      pageName={hindranceDetail ? hindranceDetail.name : ""}
      prevLocation={Locations.HindrancePage}
    >
      <HindranceDetail hindranceDetail={hindranceDetail} />
    </Page>
  );
};
