// components

import { useContentIdeas } from "./useContentIdeas";
// form react hook
import { FormProvider } from "@root/components/hook-form";
import ContentIdeasTable from "./ContentIdeasTable";

const ContentIdeas = () => {
  const { methods, handleSubmit, onSubmit, onClear } = useContentIdeas();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <ContentIdeasTable
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "title",
            defaultValue: "Remus Lupin (Foster Carer)",
            label: "title",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "article",
            defaultValue: "256",
            label: "article",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "publishDate",
            defaultValue: "Reporting and Recording Fostering",
            label: "publishDate",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "persona",
            defaultValue: "Devplan.PDF",
            label: "persona",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },

          {
            inputType: "textField",
            type: "text",
            key: "Vertical",
            defaultValue: "Draco Malfoy ",
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

export default ContentIdeas;
