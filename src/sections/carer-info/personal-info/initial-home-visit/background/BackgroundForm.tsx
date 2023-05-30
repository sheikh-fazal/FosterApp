import FormGenerator from "../form-generator/FormGenerator";
import { BackgroundFormSchema, backgroundFormValues } from ".";
import { useBackgroundForm } from "./useBackgroundForm";

const BackgroundForm = (props: any) => {
  const {
    submitBackgroundForm,
    setBackgroundFormDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeBackgroundDataStatus,
    backgroundFormFieldsInfo,
    user,
  } = useBackgroundForm();
  return (
    <FormGenerator
      FormSchema={BackgroundFormSchema}
      defaultValues={setBackgroundFormDefaultValue}
      fieldsInfo={backgroundFormFieldsInfo}
      submitClickHand={submitBackgroundForm}
      isFormSubmitting={postInitialHomeBackgroundDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default BackgroundForm;
