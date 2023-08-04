import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SanctionDetailsForm from "../sanction-details-form/SanctionDetailsForm";
// import EducationDocument from "../education-document/EducationDocument";
// import ChildEducationInfoForm from "../child-education-info-form/child-info-form/ChildEducationInfoForm";

const SanctionDetailsTabs = () => {
  return (
    <HorizaontalTabs tabsDataArray={["Sanction Details", "Upload Documents"]}>
      {/* <ChildEducationInfoForm />
      <EducationDocument /> */}
      <SanctionDetailsForm />
    </HorizaontalTabs>
  );
};

export default SanctionDetailsTabs;
