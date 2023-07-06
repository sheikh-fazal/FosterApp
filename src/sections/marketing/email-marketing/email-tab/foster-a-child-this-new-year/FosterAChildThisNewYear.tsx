// components
import EmailMarketingTable from "../../EmailMarketingTable";
import { useFosterAChildThisNewYear } from './useFosterAChildThisNewYear';
// form react hook
import { FormProvider } from "@root/components/hook-form";


const FosterAChildThisNewYear = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useFosterAChildThisNewYear();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EmailMarketingTable  disabled
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "subjectLine",
            defaultValue: "Remus Lupin (Foster Carer)",
            label: "Subject Line",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "sendData",
            defaultValue: "256",
            label: "Send Date",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "product",
            defaultValue: "Reporting and Recording Fostering",
            label: "product",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "owner",
            defaultValue: "Devplan.PDF",
            label: "Owner",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
      
          {
            inputType: "textField",
            type: "text",
            key: "status",
            defaultValue: "Draco Malfoy ",
            label: "Status",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "linkToDraft",
            defaultValue: "Draco Malfoy ",
            label: "Link To Draft",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "goal",
            defaultValue: "Draco Malfoy ",
            label: "Goal",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "sendListName",
            defaultValue: "Draco Malfoy ",
            label: "Send List Name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
        ]}
      />

    </FormProvider>
  );
}

export default FosterAChildThisNewYear