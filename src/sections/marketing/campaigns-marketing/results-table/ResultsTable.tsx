import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { Box, Card, Chip } from "@mui/material";
import { useResultsTable } from "./useResultsTable";

const OPTIONS = [

  {
    label: "Pause",
    value: "Pause",

    bgColor: "#D6D870",
    textColor: "#1D1D1D",
  },
  {
    label: "Analysis",
    value: "Analysis",

    bgColor: "#C4EA86",
    textColor: "#1D1D1D",
  },
  {
    label: "Stop",
    value: "Stop",

    bgColor: "#E5726B",
    textColor: "#1D1D1D",
  },
];

const COLUMNS = [
  
    {
      inputType: "textField",
      type: "text",
      key: "name",
      fullWidth:true,
      defaultValue: "Branded keywords",
      label: "Name",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "goal",
      fullWidth:true,
      defaultValue: "Drive traffic to site, CPC >$2.25",
      label: "Goals",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "spend",
      fullWidth:true,
      defaultValue: "$2,500.00",
      label: "Spend",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "impressions",
      fullWidth:true,
      defaultValue: "2083333",
      label: "Impressions",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "cpm",
      fullWidth:true,
      defaultValue: "2083333",
      label: "CPM",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "clicks",
      fullWidth:true,
      defaultValue: "2083333",
      label: "Clicks",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "cpc",
      fullWidth:true,
      defaultValue: "2083333",
      label: "CPC",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "conversions",
      fullWidth:true,
      defaultValue: "2083333",
      label: "Conversions",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "textField",
      type: "text",
      key: "cpa",
      fullWidth:true,
      defaultValue: "2083333",
      label: "CPA",
      validation: (Yup: any) => {
        return Yup.string().required("Name is required").min(3);
      },
    },
    {
      inputType: "multi-select",
      type: "select",
      key: "nextSteps",
      fullWidth:true,
      defaultValue: [],
      label: "Next Steps",
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

 
]
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

const ResultsTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
  useResultsTable();

  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          columns={COLUMNS}
          
          
        />
      </FormProvider>
    </Card>

  );
};

export default ResultsTable;