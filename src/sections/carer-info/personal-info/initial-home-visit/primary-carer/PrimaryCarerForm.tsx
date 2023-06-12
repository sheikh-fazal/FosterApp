import FormGenerator from "../form-generator/FormGenerator";
import { primaryCarerFormSchema } from ".";
import { usePrimaryCarerForm } from "./usePrimaryCarerForm";

const PrimaryCarerForm = () => {
  const {
    submitPrimaryCarerForm,
    setPrimaryCarerDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postPrimaryCarerDataStatus,
    user,
    primaryCarerFieldsInfo,
  } = usePrimaryCarerForm();
  return (
    <FormGenerator
      FormSchema={primaryCarerFormSchema}
      defaultValues={setPrimaryCarerDefaultValue}
      fieldsInfo={primaryCarerFieldsInfo}
      submitClickHand={submitPrimaryCarerForm}
      isFormSubmitting={postPrimaryCarerDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default PrimaryCarerForm;
