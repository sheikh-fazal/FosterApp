import FormGenerator from "../form-generator/FormGenerator";
import { BackgroundFormSchema, backgroundFormValues, fieldsInfo } from ".";

const BackgroundForm = (props: any) => {
  // const { submitBackgroundForm } = useBackgroundForm();
  const {
    defaultValuesBackgroundForm = backgroundFormValues,
    submitBackgroundForm,
  } = props;
  return (
    <FormGenerator
      FormSchema={BackgroundFormSchema}
      defaultValues={defaultValuesBackgroundForm}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitBackgroundForm}
    />
  );
};

export default BackgroundForm;
