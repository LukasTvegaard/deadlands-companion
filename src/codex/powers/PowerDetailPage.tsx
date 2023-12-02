import { useParams } from "react-router-dom";

import Page from "../../shared/page/Page";
import { getEnumByString } from "../../utils/enums/EnumUtil";
import { Locations } from "../../utils/Location";
import { Power } from "../../utils/enums/Power";
import { getPowerDetailByKey } from "../../static/powers/PowerUtil";
import { PowerDetail } from "./PowerDetail";

export const PowerDetailPage = () => {
  const routeParams = useParams();
  const powerParam = getEnumByString(routeParams.id, Power);
  const powerDetail = getPowerDetailByKey(powerParam);

  return (
    <Page
      pageName={powerDetail ? powerDetail.name : ""}
      prevLocation={Locations.WeaponPage}
    >
      <PowerDetail powerDetail={powerDetail} />
    </Page>
  );
};
