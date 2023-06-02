import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import GPDetailsInfo from "../gp-details-info/GPDetailsInfo";


const CHILDTHERAPYINFOTABSDATA = ["GP Details Info", "Documents"];

const GPDetailsInfoTabs = () => {
  // const {
  //   submitAssesmentForm,
  //   submitBackgroundForm,
  //   submitInterestForm,
  //   submitPrimaryCarerForm,
  // } = useInitialHomeVisitTab();

  return (
    <HorizaontalTabs tabsDataArray={CHILDTHERAPYINFOTABSDATA}>
      <GPDetailsInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default GPDetailsInfoTabs;
