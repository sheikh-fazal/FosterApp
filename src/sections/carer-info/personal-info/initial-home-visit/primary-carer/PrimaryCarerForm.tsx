import FormGenerator from "../form-generator/FormGenerator";
import { FormValues, FormSchema, fieldsInfo } from ".";
import { usePrimaryCarerForm } from "./usePrimaryCarerForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PrimaryCarerForm = (props: any) => {
  const { defaultValuesPrimaryCarer = FormValues } = props;
  const {
    submitPrimaryCarerForm,
    setPrimaryCarerDefaultValue,
    getAllInitialHomeVisitDataStatus,
  } = usePrimaryCarerForm();
  if (getAllInitialHomeVisitDataStatus.isLoading) return <SkeletonFormdata />;
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={setPrimaryCarerDefaultValue}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitPrimaryCarerForm}
    />
  );
};

export default PrimaryCarerForm;
