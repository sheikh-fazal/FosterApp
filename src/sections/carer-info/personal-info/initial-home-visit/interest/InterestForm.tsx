import FormGenerator from "../form-generator/FormGenerator";
import { InterestFormSchema, interestFormValues, fieldsInfo } from ".";
import { useInterestForm } from "./useInterestForm";

const InterestForm = (props: any) => {
  const {
    submitInterestForm,
    setInterestDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeInterestDataStatus,
  } = useInterestForm();
  return (
    <FormGenerator
      FormSchema={InterestFormSchema}
      defaultValues={setInterestDefaultValue}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitInterestForm}
      isFormSubmitting={postInitialHomeInterestDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
    />
  );
};

export default InterestForm;
