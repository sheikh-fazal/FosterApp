import FormGenerator from "../form-generator/FormGenerator";
import { FormSchema } from ".";
import { useAssesmentForm } from "./useAssesmentForm";

const AssesmentForm = () => {
  const {
    submitAssesmentForm,
    setAssesmentFormDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeAssessmentDataStatus,
    assesmentFormFieldsInfo,
    user,
  } = useAssesmentForm();
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={setAssesmentFormDefaultValue}
      fieldsInfo={assesmentFormFieldsInfo}
      submitClickHand={submitAssesmentForm}
      isFormSubmitting={postInitialHomeAssessmentDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default AssesmentForm;
