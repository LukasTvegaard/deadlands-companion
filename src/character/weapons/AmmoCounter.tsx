import { AmmoWeaponDetail } from "../../utils/types/WeaponDetailType";
import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { updateAmmo } from "./WeaponDataAccess";
import { Button } from "../../shared/buttons/Button";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { FlexRow } from "../../codex/shared/FlexRow";

type AmmoCounterProps = {
  ammoWeaponDetail: AmmoWeaponDetail;
};
export const AmmoCounter = ({ ammoWeaponDetail }: AmmoCounterProps) => {
  const character = useContext(CharacterContext);

  return (
    <FlexRow>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginLeft: "14px",
        }}
      >
        {[...Array(ammoWeaponDetail.maxAmmo).keys()].map((index) => {
          const isEmpty = index >= ammoWeaponDetail.currentAmmo;
          return (
            <div key={index} style={{ marginLeft: "-22px" }}>
              <Icon
                height={32}
                width={32}
                viewbox="0 0 463 463"
                icon={Icons.Bullet}
                color={isEmpty ? "#777777" : undefined}
              />
            </div>
          );
        })}
      </div>
      <div>
        <Button
          text={"Reload"}
          onClick={() =>
            updateAmmo(
              character.id,
              ammoWeaponDetail.key,
              ammoWeaponDetail.maxAmmo
            )
          }
        />
      </div>
    </FlexRow>
  );
};
