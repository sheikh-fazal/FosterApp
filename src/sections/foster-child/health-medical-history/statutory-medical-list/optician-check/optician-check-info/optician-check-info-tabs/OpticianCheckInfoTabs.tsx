import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import { OPTICIANCHECKINFOTABSDATA } from ".";
import OpticianCheckInfo from "../OpticianCheckInfo";



const OpticianCheckInfoTabs = () => {

  return (
    <HorizaontalTabs tabsDataArray={OPTICIANCHECKINFOTABSDATA}>
      <OpticianCheckInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default OpticianCheckInfoTabs;
