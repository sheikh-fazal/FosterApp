// components
import EventMarketingTable from "../../EventMarketingTable";
import { useCustomer } from './useCustomer';
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { Checkbox } from "@mui/material";


const Customer = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useCustomer();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EventMarketingTable  disabled
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "Belinda Chen",
            label: "name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "type",
            defaultValue: "VIP Customer",
            label: "type",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "location",
            defaultValue: "NYC",
            label: "location",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "homeAddress",
            defaultValue: "10 Cedar Drive San Francisco, CA 94301",
            label: "Home Address",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "email",
            defaultValue: "belinda@email.com",
            label: "email",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "inviteTo",
            defaultValue: "November 2021 Foster Carers Meetup",
            label: "Invited To",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "noEventsAttended",
            defaultValue: 45,
            label: "No. Events Attended",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "notes",
            defaultValue: "NOTES",
            label: "notes",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          }
        ]}
      />

    </FormProvider>
  );
}

export default Customer
