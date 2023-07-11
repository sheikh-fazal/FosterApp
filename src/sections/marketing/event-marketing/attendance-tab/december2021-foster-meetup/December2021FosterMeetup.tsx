// components
import EventMarketingTable from "../../EventMarketingTable";
import { useDecember2021FosterMeetup } from './useDecember2021FosterMeetup';
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { Checkbox } from "@mui/material";


const December2021FosterMeetup = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useDecember2021FosterMeetup();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EventMarketingTable  disabled
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "November 2021 Foster Carers Meetup, Fostering",
            label: "name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "person",
            defaultValue: "Belinda Chen",
            label: "person",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "showedUp",
            defaultValue: "YES",
            label: "Showed up",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "rsvPed",
            defaultValue: "NO",
            label: "RSVPed",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "invited",
            defaultValue: "YES",
            label: "Invited",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "date",
            defaultValue: "12/12/2021",
            label: "Date",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "notes",
            defaultValue: "Deepa was really excited about this small event and wants to be invited to any in the future.",
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

export default December2021FosterMeetup
