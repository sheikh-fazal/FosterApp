import FormGenerator from "../form-generator/FormGenerator";
import { FormSchema, fieldsInfo } from ".";
import { useAssesmentForm } from "./useAssesmentForm";

const AssesmentForm = () => {
  const {
    submitAssesmentForm,
    setAssesmentFormDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeAssessmentDataStatus,
  } = useAssesmentForm();
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={setAssesmentFormDefaultValue}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitAssesmentForm}
      isFormSubmitting={postInitialHomeAssessmentDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
    />
  );
};

export default AssesmentForm;
