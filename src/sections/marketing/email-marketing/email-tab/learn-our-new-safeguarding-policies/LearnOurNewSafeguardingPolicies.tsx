// components
import EmailMarketingTable from '../../EmailMarketingTable';
import { useLearnOurNewSafeguardingPolicies } from './useLearnOurNewSafeguardingPolicies';
// form react hook
import { FormProvider } from "@root/components/hook-form";


const LearnOurNewSafeguardingPolicies = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useLearnOurNewSafeguardingPolicies();
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
            defaultValue: "pending",
            label: "Status",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "linkToDraft", 
            defaultValue: "draft link",
            label: "Link To Draft",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "goal",
            defaultValue: "Write goal",
            label: "Goal",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "sendListName",
            defaultValue: "list name",
            label: "Send List Name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "imageAssets",
            defaultValue: "link",
            label: "Image Assets",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "landingPage",
            defaultValue: "link",
            label: "Landing Page",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "facebookShareLink",
            defaultValue: "link",
            label: "Facebook Share Link",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "twitterShareLink",
            defaultValue: "link",
            label: "Twitter Share Link",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "UTMcampaign",
            defaultValue: "fotH352305923",
            label: "UTM Campaign",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "totalEmailSent",
            defaultValue: "1256213",
            label: "Total Email Sent",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "totalEmailDelivered",
            defaultValue: "215235",
            label: "Total Email Delivered",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },          {
            inputType: "textField",
            type: "text",
            key: "totalEmailOpened",
            defaultValue: "2124",
            label: "Total Email Opened",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "totalClicked",
            defaultValue: "42",
            label: "Total Clicked",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "deliverablitiy",
            defaultValue: "90%",
            label: "Deliverability",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "openRate",
            defaultValue: "18%",
            label: "Open Rate",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "CTR",
            defaultValue: "2.0%",
            label: "CTR",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "salesAttributed",
            defaultValue: "$3072",
            label: "Sales Attributed",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
        ]}
      />

    </FormProvider>
  );
}

export default LearnOurNewSafeguardingPolicies