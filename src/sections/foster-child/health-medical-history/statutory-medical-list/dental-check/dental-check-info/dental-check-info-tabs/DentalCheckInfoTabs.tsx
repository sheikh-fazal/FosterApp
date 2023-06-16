import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import ClaMedicalInfo from "../DentalCheckInfo";
import { DENTALCHECKINFOTABSDATA } from ".";



const DentalCheckInfoTabs = () => {

  return (
    <HorizaontalTabs tabsDataArray={DENTALCHECKINFOTABSDATA}>
      <ClaMedicalInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default DentalCheckInfoTabs;
