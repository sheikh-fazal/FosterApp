// components
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { usePublished } from "./usePublished";
import PublishedTable from "./PublishedTable";

const Published = () => {
  const { methods, handleSubmit, onSubmit, onClear } = usePublished();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <PublishedTable
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "title",
            defaultValue: "",
            label: "Title",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "article",
            defaultValue: "",
            label: "Article",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "firstWeekTraffic",
            defaultValue: "",
            label: "Firstweek Traffic",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "feedback",
            defaultValue: "",
            label: "Feedback",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required");
            },
          },
        ]}
      />
    </FormProvider>
  );
};

export default Published;
