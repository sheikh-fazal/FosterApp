import FormGenerator from "../form-generator/FormGenerator";
import { FormValues, FormSchema, fieldsInfo } from ".";
import { useAssesmentForm } from "./useAssesmentForm";

const AssesmentForm = () => {
  const { submitAssesmentForm } = useAssesmentForm();
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={FormValues}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitAssesmentForm}
    />
  );
};

export default AssesmentForm;
