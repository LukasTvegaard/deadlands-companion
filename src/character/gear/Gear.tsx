import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { Money } from "./Money";

export const Gear = () => {
  return (
    <Page pageName="Gear" prevLocation={Locations.CharacterMenu}>
      <Money />
      Coming soon...
    </Page>
  );
};
