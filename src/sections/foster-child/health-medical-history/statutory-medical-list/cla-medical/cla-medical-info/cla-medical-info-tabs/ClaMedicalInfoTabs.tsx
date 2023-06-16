import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import ClaMedicalInfo from "../ClaMedicalInfo";
import { CLAMEDICALINFOTABSDATA } from ".";



const ClaMedicalInfoTabs = () => {

  return (
    <HorizaontalTabs tabsDataArray={CLAMEDICALINFOTABSDATA}>
      <ClaMedicalInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default ClaMedicalInfoTabs;
