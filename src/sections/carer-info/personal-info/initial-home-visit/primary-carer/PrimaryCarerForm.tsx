import FormGenerator from "../form-generator/FormGenerator";
import { FormValues, FormSchema } from ".";
import { usePrimaryCarerForm } from "./usePrimaryCarerForm";

const PrimaryCarerForm = (props: any) => {
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
      FormSchema={FormSchema}
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
