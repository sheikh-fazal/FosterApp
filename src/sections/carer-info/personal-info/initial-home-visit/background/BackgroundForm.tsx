import FormGenerator from "../form-generator/FormGenerator";
import { BackgroundFormSchema, backgroundFormValues, fieldsInfo } from ".";
import { useBackgroundForm } from "./useBackgroundForm";

const BackgroundForm = (props: any) => {
  const {
    submitBackgroundForm,
    setBackgroundFormDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeBackgroundDataStatus,
  } = useBackgroundForm();
  return (
    <FormGenerator
      FormSchema={BackgroundFormSchema}
      defaultValues={setBackgroundFormDefaultValue}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitBackgroundForm}
      isFormSubmitting={postInitialHomeBackgroundDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
    />
  );
};

export default BackgroundForm;
