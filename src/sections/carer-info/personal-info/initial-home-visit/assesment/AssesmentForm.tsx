import FormGenerator from "../form-generator/FormGenerator";
import { FormValues, FormSchema, fieldsInfo } from ".";

const AssesmentForm = (props: any) => {
  const { defaultValuesAssesmentForm = FormValues, submitAssesmentForm } =
    props;
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={defaultValuesAssesmentForm}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitAssesmentForm}
    />
  );
};

export default AssesmentForm;
