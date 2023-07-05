// components

import { useVerticals } from "./useVerticals";
// form react hook
import { FormProvider } from "@root/components/hook-form";
import VerticalsTable from "./verticalsTable";

const Verticals = () => {
  const { methods, handleSubmit, onSubmit, onClear } = useVerticals();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <VerticalsTable
        tableKey="exampleTable"
        columns={[
       
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "",
            label: "Name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "personas",
            defaultValue: "",
            label: "Personas",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "contentIdeas",
            defaultValue: "",
            label: "Content Ideas",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
        
      

        
        ]}
      />
    </FormProvider>
  );
};

export default Verticals;

