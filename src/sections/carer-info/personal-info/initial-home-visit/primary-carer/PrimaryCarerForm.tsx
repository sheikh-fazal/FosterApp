import FormGenerator from "../form-generator/FormGenerator";
import { FormValues, FormSchema, fieldsInfo } from ".";
import { usePrimaryCarerForm } from "./usePrimaryCarerForm";

const PrimaryCarerForm = (props: any) => {
  const {
    submitPrimaryCarerForm,
    setPrimaryCarerDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postPrimaryCarerDataStatus,
    user,
  } = usePrimaryCarerForm();
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={setPrimaryCarerDefaultValue}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitPrimaryCarerForm}
      isFormSubmitting={postPrimaryCarerDataStatus.isLoading}
      isSkeletonVisible={getAllInitialHomeVisitDataStatus.isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default PrimaryCarerForm;
