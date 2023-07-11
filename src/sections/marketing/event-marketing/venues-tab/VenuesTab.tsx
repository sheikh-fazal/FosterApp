// components
import EmailMarketingTable from "../EventMarketingTable";
import { useVenuesTab } from './useVenuesTab';
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { Checkbox } from "@mui/material";


const VenuesTab = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useVenuesTab();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EmailMarketingTable  disabled
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "Cottingham Library",
            label: "name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "venuePhotos",
            defaultValue: "Photo",
            label: "Venue Photos",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "address",
            defaultValue: "Library and Customer Service Centre, Market Green, Cottingham HU16 5QG, United Kingdom",
            label: "address",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "hostedEvents",
            defaultValue: "November 2021 Foster Carers meetup",
            label: "Hosted Events",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "mapCache",
            defaultValue: "eyvkdSDIG;Kdygaosdigffjas;idf;",
            label: "map cache",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "notes",
            defaultValue: "Jasmine suggested this restaurant and said it was great amiance for this type of event (though its potentially a little",
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

export default VenuesTab
