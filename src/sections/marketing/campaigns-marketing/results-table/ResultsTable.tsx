import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Card } from "@mui/material";
import { useResultsTable } from "./useResultsTable";

const ResultsTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
  useResultsTable();
  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "name",
              defaultValue: "Branded keywords",
              label: "Name",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "goals",
              defaultValue: "Drive traffic to site, CPC >$2.25",
              label: "Goals",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "spend",
              defaultValue: "$2,500.00",
              label: "Spend",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "impressions",
              defaultValue: "2083333",
              label: "Impressions",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "cpm",
              defaultValue: "$1.20",
              label: "CPM",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "clicks",
              defaultValue: "1152",
              label: "Clicks",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "cpc",
              defaultValue: "$2.17",
              label: "CPC",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "conversions",
              defaultValue: "112",
              label: "Conversions",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "cpa",
              defaultValue: "$22.32",
              label: "CPA",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "nextSteps",
              defaultValue: "continue",
              label: "Next Steps",
              validation: (Yup: any) => { },
            },

          ]}
        />
      </FormProvider>
    </Card>

  );
};

export default ResultsTable;