import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import HealthTherapyInfo from "../health-therapy-info/HealthTherapyInfo";

const CHILDTHERAPYINFOTABSDATA = ["Health Therapy Info", "Documents"];

const ChildTherapyInfoTabs = () => {
  // const {
  //   submitAssesmentForm,
  //   submitBackgroundForm,
  //   submitInterestForm,
  //   submitPrimaryCarerForm,
  // } = useInitialHomeVisitTab();

  return (
    <HorizaontalTabs tabsDataArray={CHILDTHERAPYINFOTABSDATA}>
      <HealthTherapyInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default ChildTherapyInfoTabs;
