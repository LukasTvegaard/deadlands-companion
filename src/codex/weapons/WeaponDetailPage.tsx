import { useParams } from "react-router-dom";

import Page from "../../shared/page/Page";
import { getEnumByString } from "../../utils/enums/EnumUtil";
import { Locations } from "../../utils/Location";
import { WeaponDetail } from "./WeaponDetail";
import { Weapon } from "../../utils/enums/Weapon";
import { getWeaponDetailByKey } from "../../static/weapons/WeaponUtil";

export const WeaponDetailPage = () => {
  const routeParams = useParams();
  const weaponParam = getEnumByString(routeParams.id, Weapon);
  const weaponDetail = getWeaponDetailByKey(weaponParam);

  return (
    <Page
      pageName={weaponDetail ? weaponDetail.name : ""}
      prevLocation={Locations.WeaponPage}
    >
      <WeaponDetail weaponDetail={weaponDetail} />
    </Page>
  );
};
