import HorizaontalTabs from "@root/components/HorizaontalTabs";
import BackgroundForm from "../background/BackgroundForm";
import Document from "../document/Document";
import InterestForm from "../interest/InterestForm";
import PrimaryCarerForm from "../primary-carer/PrimaryCarerForm";
import AssesmentForm from "../assesment/AssesmentForm";

const INITIALENQUIRYDATA = [
  "Primary Carer",
  "Interest",
  "Background",
  "Assesment",
  "Documents",
];

const InitialHomeVisitTab = () => {
  // const {
  //   submitAssesmentForm,
  //   submitBackgroundForm,
  //   submitInterestForm,
  //   submitPrimaryCarerForm,
  // } = useInitialHomeVisitTab();

  return (
    <HorizaontalTabs tabsDataArray={INITIALENQUIRYDATA}>
      <PrimaryCarerForm />
      <InterestForm />
      <BackgroundForm />
      <AssesmentForm />
      <Document />
    </HorizaontalTabs>
  );
};

export default InitialHomeVisitTab;
