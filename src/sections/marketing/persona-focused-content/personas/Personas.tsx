// components

import PersonasTable from "./PersonasTable";
import { usePersonas } from "./usePersonas";
// form react hook
import { FormProvider } from "@root/components/hook-form";

const Personas = () => {
  const { methods, handleSubmit, onSubmit, onClear } = usePersonas();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <PersonasTable
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
            key: "notes",
            defaultValue: "",
            label: "Notes",
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
          {
            inputType: "textField",
            type: "text",
            key: "editorial",
            defaultValue: "",
            label: "Editorial",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },

          {
            inputType: "textField",
            type: "text",
            key: "Vertical",
            defaultValue: "",
            label: "Vertical",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
        ]}
      />
    </FormProvider>
  );
};

export default Personas;
