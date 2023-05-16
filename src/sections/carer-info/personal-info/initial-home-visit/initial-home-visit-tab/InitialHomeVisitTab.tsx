import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AssesmentForm from "../assesment/AssesmentForm";
import BackgroundForm from "../background/BackgroundForm";
import Document from "../document/Document";
import InterestForm from "../interest/InterestForm";
import PrimaryCarerForm from "../primary-carer/PrimaryCarerForm";
import { useinitialHomeVisitTab } from "./useInitialHomeVisitTab";

const INITIALENQUIRYDATA = [
  "Primary Carer",
  "Interest",
  "Background",
  "Assesment",
  "Documents",
];

const InitialHomeVisitTab = () => {
  const {
    submitAssesmentForm,
    submitBackgroundForm,
    submitInterestForm,
    submitPrimaryCarerForm,
  } = useinitialHomeVisitTab();

  return (
    <HorizaontalTabs tabsDataArray={INITIALENQUIRYDATA}>
      <PrimaryCarerForm submitPrimaryCarerForm={submitPrimaryCarerForm} />
      <InterestForm submitInterestForm={submitInterestForm} />
      <BackgroundForm submitBackgroundForm={submitBackgroundForm} />
      <AssesmentForm submitAssesmentForm={submitAssesmentForm} />
      <Document />
    </HorizaontalTabs>
  );
};

export default InitialHomeVisitTab;
