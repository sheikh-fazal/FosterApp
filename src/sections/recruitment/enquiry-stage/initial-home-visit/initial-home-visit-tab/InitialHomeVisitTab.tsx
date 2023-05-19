import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AssesmentForm from "@root/sections/carer-info/personal-info/initial-home-visit/assesment/AssesmentForm";
import BackgroundForm from "@root/sections/carer-info/personal-info/initial-home-visit/background/BackgroundForm";
import InterestForm from "@root/sections/carer-info/personal-info/initial-home-visit/interest/InterestForm";
import PrimaryCarerForm from "@root/sections/carer-info/personal-info/initial-home-visit/primary-carer/PrimaryCarerForm";
import Document from "../document/Document";
import { useInitialHomeVisitTab } from "./useInitialHomeVisitTab";

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
  } = useInitialHomeVisitTab();

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
