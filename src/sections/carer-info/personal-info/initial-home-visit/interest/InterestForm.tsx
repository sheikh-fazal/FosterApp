import FormGenerator from "../form-generator/FormGenerator";
import { InterestFormSchema, InterestFormValues, fieldsInfo } from ".";
import { useInterestForm } from "./useInterestForm";

const InterestForm = (props: any) => {
  const { defaultValuesInterestForm = InterestFormValues } = props;
  const { submitInterestForm } = useInterestForm();
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
