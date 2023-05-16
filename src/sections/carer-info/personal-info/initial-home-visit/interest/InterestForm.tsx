import FormGenerator from "../form-generator/FormGenerator";
import { InterestFormSchema, InterestFormValues, fieldsInfo } from ".";

const InterestForm = (props: any) => {
  const { defaultValuesInterestForm = InterestFormValues, submitInterestForm } =
    props;
  return (
    <FormGenerator
      FormSchema={InterestFormSchema}
      defaultValues={defaultValuesInterestForm}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitInterestForm}
    />
  );
};

export default InterestForm;
