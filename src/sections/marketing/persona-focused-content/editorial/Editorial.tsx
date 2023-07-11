// components
import FormTable from "@root/components/Table/FormTable";
import { useEditorial } from './useEditorial';
// form react hook
import { FormProvider } from "@root/components/hook-form";
import EditorialTable from "./EditorialTable";


const Editorial = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useEditorial();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EditorialTable  
        tableKey="exampleTable"
        columns={[
        
          {
            inputType: "textField",
            type: "text",
            key: "title",
            defaultValue: "",
            label: "title",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "status",
            defaultValue: "",
            label: "status",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "writer",
            defaultValue: "",
            label: "writer",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "publishOn",
            defaultValue: "",
            label: "publish On",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
      
          {
            inputType: "textField",
            type: "text",
            key: "publishLocation",
            defaultValue: "",
            label: "publish Location",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "persona",
            defaultValue: "",
            label: "persona",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "contentIdeas",
            defaultValue: "",
            label: "content Ideas",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "vertical",
            defaultValue: "",
            label: "vertical",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "published",
            defaultValue: "",
            label: "published",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },

        ]}
      />

    </FormProvider>
  );
}

export default Editorial