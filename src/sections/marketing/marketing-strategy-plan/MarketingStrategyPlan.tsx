import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { useMarketingStrategyPlan } from "./useMarketingStrategyPlan";
import { Card } from "@mui/material";




const MarketingStrategyPlan = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
    useMarketingStrategyPlan();
  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "strategyType",
              defaultValue: "Market Penetration Strategy",
              label: "Strategy Type",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "marketingPlan",
              defaultValue: "Abc.pdf",
              label: "Marketing Plan",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "author",
              defaultValue: "James Watt (Marketing Manager)",
              label: "Author (Role)",
              validation: (Yup: any) => { },
            },
            {
              inputType: "textField",
              type: "text",
              key: "approvedByRole",
              defaultValue: "Draco Malfoy ( Director )",
              label: "Approved by (Role)",
              validation: (Yup: any) => { },
            },
            {
              inputType: "datePicker",
              type: "dob",
              key: "approvalDate",
              defaultValue: new Date(),
              label: "Approval Date",
              validation: (Yup: any) => {
                return Yup.date()
                  .typeError("End date is required")
                  .required("End date is required");
              },
              format: (date: any) => {
                return dayjs(date).format("DD/MM/YYYY");
              },
            },

          ]}
        />
      </FormProvider>
    </Card>

  );
};

export default MarketingStrategyPlan;