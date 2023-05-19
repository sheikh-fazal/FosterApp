import FormGenerator from "../form-generator/FormGenerator";
import { FormValues, FormSchema, fieldsInfo } from ".";
import { usePrimaryCarerForm } from "./usePrimaryCarerForm";

const PrimaryCarerForm = (props: any) => {
  const { defaultValuesPrimaryCarer = FormValues } = props;
  const { submitPrimaryCarerForm } = usePrimaryCarerForm();
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={defaultValuesPrimaryCarer}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitPrimaryCarerForm}
    />
  );
};

export default PrimaryCarerForm;
