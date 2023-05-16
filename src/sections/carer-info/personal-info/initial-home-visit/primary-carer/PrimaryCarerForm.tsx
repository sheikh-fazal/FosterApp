import FormGenerator from "../form-generator/FormGenerator";
import { FormValues, FormSchema, fieldsInfo } from ".";

const PrimaryCarerForm = (props: any) => {
  const { defaultValuesPrimaryCarer = FormValues, submitPrimaryCarerForm } = props;
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
