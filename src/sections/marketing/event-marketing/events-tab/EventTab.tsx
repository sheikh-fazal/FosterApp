// components
import EmailMarketingTable from "../EventMarketingTable";
import { useEventTab } from './useEventTab';
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { Checkbox } from "@mui/material";


const EventTab = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useEventTab();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EmailMarketingTable  disabled
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "Care For Fostering",
            label: "name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "type",
            defaultValue: "Meetup",
            label: "Type",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "date",
            defaultValue: "21/21/2012",
            label: "Date",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "venues",
            defaultValue: "RCottingham Library",
            label: "Venues",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "details",
            defaultValue: "Our monthly Foster carer meetup for fostering networks campaign to raise the profile of fostering and show how foster care",
            label: "Details",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "noAttendees",
            defaultValue: 6,
            label: "No.Attendees",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "noInvites",
            defaultValue: 4,
            label: "No.Invites",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "invites",
            defaultValue: "marc jenkins, Knedrik Siv, Blinda Chen,",
            label: "Invites",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          }
        ]}
      />

    </FormProvider>
  );
}

export default EventTab
