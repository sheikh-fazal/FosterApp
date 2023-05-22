import { FC } from "react";
import PersonalDetailsForm from "../about-candidate/personal-details/personalDetailsForm/PersonalDetailsForm";
import AddressDetailsForm from "../about-candidate/address-details/addressDetailsForm/AddressDetailsForm";
import PhotoForId from "../about-candidate/photo-for-id/PhotoForId";
import IdUpload from "../about-candidate/id-upload/IdUpload";
import AddReference from "../references/add-reference/AddReference";
import TrainingCertificteForm from "../training/training-certificate/TrainingCertificteForm";
import AdditionalTrainingDetails from "../training/additional-training-details/AdditionalTrainingDetails";
import WorkExperienceUnemployment from "../training/work-experience-unemployment/WorkExperienceUnemployment";
import SpecialitiesForm from "../training/specialities/SpecialitiesForm";
import DBS from "../background-checks/dbs/DBS";
import WriteToWork from "../background-checks/right-to-work/WriteToWork";
import NextOfKin from "../other-information/next-of-kin/NextOfKin";
import ContactPrefernce from "../other-information/contact-perfernce/ContactPrefernce";
import EmplymentStatus from "../other-information/employment-status/EmplymentStatus";
import PayForm from "../other-information/employment-status/pay-form/PayForm";
import OpportunityDeclaration from "../other-information/opportunity-declaration/OpportunityDeclaration";
import AdditionalDocs from "../other-information/additional-docs/AdditionalDocs";
import BankDetails from "../other-information/bank-details/BankDetails";
import Immunisation from "../medical-history/immunisation/Immunisation";
import MedicalQuestionnaire from "../medical-history/medical-questionnaire/MedicalQuestionnaire";
import AddDeclaration from "../declaration/add-declaration/AddDeclaration";

const RenderForm: FC<{ name: string; activateNextForm: () => void }> = ({
  name,
  activateNextForm,
}) => {
  return (
    <>
      <PersonalDetailsForm />
      {/* <AddressDetailsForm /> */}
      {/* <PhotoForId /> */}
      {/* <IdUpload /> */}
      {/* <AddReference /> */}
      {/* <TrainingCertificteForm /> */}
      {/* <AdditionalTrainingDetails /> */}
      {/* <WorkExperienceUnemployment /> */}
      {/* <SpecialitiesForm /> */}
      {/* <DBS /> */}
      {/* <WriteToWork /> */}
      {/* <NextOfKin /> */}
      {/* <ContactPrefernce /> */}
      {/* <EmplymentStatus /> */}
      {/* <OpportunityDeclaration /> */}
      {/* <AdditionalDocs /> */}
      {/* <BankDetails /> */}
      {/* <Immunisation /> */}
      {/* <MedicalQuestionnaire /> */}
      {/* <AddDeclaration /> */}
    </>
  );
};

export default RenderForm;
