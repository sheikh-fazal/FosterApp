import FormGenerator from "../form-generator/FormGenerator";
import { interestFormSchema } from ".";
import { useInterestForm } from "./useInterestForm";

const InterestForm = () => {
  const {
    submitInterestForm,
    setInterestDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeInterestDataStatus,
    interestFormFieldsInfo,
    user,
  } = useInterestForm();
  return (
    <FormGenerator
      FormSchema={interestFormSchema}
      defaultValues={setInterestDefaultValue}
      fieldsInfo={interestFormFieldsInfo}
      submitClickHand={submitInterestForm}
      isFormSubmitting={postInitialHomeInterestDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default InterestForm;
