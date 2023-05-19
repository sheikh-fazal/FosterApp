import FormGenerator from "../form-generator/FormGenerator";
import { BackgroundFormSchema, backgroundFormValues, fieldsInfo } from ".";
import { useBackgroundForm } from "./useBackgroundForm";

const BackgroundForm = (props: any) => {
  const { submitBackgroundForm } = useBackgroundForm();
  const { defaultValuesBackgroundForm = backgroundFormValues } = props;
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
