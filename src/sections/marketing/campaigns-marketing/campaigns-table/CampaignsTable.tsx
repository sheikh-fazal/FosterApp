import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Card } from "@mui/material";
import { useCampaignsTable } from "./useCampaignsTable";

const CampaignsTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
  useCampaignsTable();
  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "campaigns",
              defaultValue: "Branded keywords",
              label: "Campaigns",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "status",
              defaultValue: "Development",
              label: "Status",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "goal",
              defaultValue: "Drive traffic to site, CPC >$2.25",
              label: "Goal",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "funnelStage",
              defaultValue: "Consideration",
              label: "Funnel Stage",
              validation: (Yup: any) => { },
            },
            {
              inputType: "datePicker",
              type: "dob",
              key: "startDate",
              defaultValue: new Date(),
              label: "Start Date",
              validation: (Yup: any) => {
                return Yup.date()
                  .typeError("End date is required")
                  .required("End date is required");
              },
              format: (date: any) => {
                return dayjs(date).format("DD/MM/YYYY");
              },
            },
            {
              inputType: "datePicker",
              type: "dob",
              key: "endDate",
              defaultValue: new Date(),
              label: "End Date",
              validation: (Yup: any) => {
                return Yup.date()
                  .typeError("End date is required")
                  .required("End date is required");
              },
              format: (date: any) => {
                return dayjs(date).format("DD/MM/YYYY");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "nextSteps",
              defaultValue: "Continue",
              label: "Next Steps",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "platform",
              defaultValue: "Google",
              label: "Platform",
              validation: (Yup: any) => { },
            },

          ]}
        />
      </FormProvider>
    </Card>

  );
};

export default CampaignsTable;