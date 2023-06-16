import FormGenerator from "../form-generator/FormGenerator";
import { backgroundFormSchema} from ".";
import { useBackgroundForm } from "./useBackgroundForm";

const BackgroundForm = () => {
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
      FormSchema={backgroundFormSchema}
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
