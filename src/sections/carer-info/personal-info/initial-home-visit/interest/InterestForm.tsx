import FormGenerator from "../form-generator/FormGenerator";
import { InterestFormSchema, interestFormValues } from ".";
import { useInterestForm } from "./useInterestForm";

const InterestForm = (props: any) => {
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
      FormSchema={InterestFormSchema}
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
