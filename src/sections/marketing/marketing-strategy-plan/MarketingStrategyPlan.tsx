import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { useMarketingStrategyPlan } from "./useMarketingStrategyPlan";
import { Box, Card, Chip } from "@mui/material";




///---------------------------------
// Constants
const OPTIONS = [

  {
    label: "Market Development Strategy",
    value: "Market Development Strategy",

    bgColor: "#C4CE4C",
    textColor: "#1D1D1D",
  },
  {
    label: "Product Development Strategy",
    value: "Product Development Strategy",

    bgColor: "#73F2A6",
    textColor: "#1D1D1D",
  },
  {
    label: "Diversification Strategy",
    value: "Diversification Strategy",

    bgColor: "#F29973",
    textColor: "#1D1D1D",
  },
];





const MarketingStrategyPlan = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
    useMarketingStrategyPlan();
    
function DataChips({ options }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "unwrap",
        gap: 1,
      }}
    >
      {options
        .slice(0, 3)
        .map(
          ({
            value,
            label,
            bgColor = "#e4e7eb",
            textColor = "#212b36",
          }: any) => (
            <Chip
              sx={{
                backgroundColor: bgColor,
                color: textColor,
                fontSize: "10px !important",
                p: "5px 10px",
                maxHeight: "22px",

                "& .MuiChip-label": {
                  p: 0,
                },
              }}
              key={value}
              label={label}
            />
          )
        )}
    </Box>
  );
}

  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
          tableKey="exampleTable"
          columns={[
             {
              inputType: "multi-select",
              type: "select",
              key: "strategyType",
              defaultValue: [],
              label: "Strategy Type",
              options: OPTIONS,
              validation: (Yup: any) => {
                return Yup.array()
                  .of(
                    Yup.object().shape({
                      label: Yup.string(),
                      value: Yup.string(),
                      bgColor: Yup.string(),
                      textColor: Yup.string(),
                    })
                  )
                  .test(
                    "required",
                    "Platform is required.",
                    (arr: any) => arr.length > 0
                  );
              },
              format: (selectedValues = []) => {
                return <DataChips options={selectedValues} />;
              },
            },

            {
              inputType: "textField",
              type: "text",
              key: "marketingPlan",
              defaultValue: "Branded keywords",
              label: "Marketing Plan",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "author",
              defaultValue: "Drive traffic to site, CPC >$2.25",
              label: "Authors",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "approvedByRole",
              defaultValue: "$2,500.00",
              label: "Approved By (Role)",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
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