import HorizaontalTabs from "@root/components/HorizaontalTabs";
import EducationDocument from "../education-document/EducationDocument";
import ChildEducationInfo from "@root/pages/foster-child/education-records/child-education";
import ChildEducationInfoForm from "../child-education-info-form/child-info-form/ChildEducationInfoForm";
// import Documents from "../documents/Documents";
// import GPDetailsInfo from "../gp-details-info/GPDetailsInfo";

const ChildEducationInfoTabs = () => {
  return (
    <HorizaontalTabs tabsDataArray={["Education Info", "Upload Documents"]}>
      {/* <GPDetailsInfo />
      <Documents /> */}
      <ChildEducationInfoForm />
      <EducationDocument />
    </HorizaontalTabs>
  );
};

export default ChildEducationInfoTabs;
