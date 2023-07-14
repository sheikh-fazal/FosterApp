import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Box, Card, Chip } from "@mui/material";
import { useCampaignsTable } from "./useCampaignsTable";

// Constants
const StatusOptions = [
  {
    label: "Reviews",
    value: "Reviews",
    bgColor: "#73F2A6",
    textColor: "#1D1D1D",
  },
  {
    label: "Planning",
    value: "Planning",
    bgColor: "#C4CE4C",
    textColor: "#1D1D1D",
  },
  {
    label: "Published",
    value: "Published",

    bgColor: "#F29973",
    textColor: "#1D1D1D",
  },
  {
    label: "On Hold",
    value: "On Hold",

    bgColor: "#A3A1F6",
    textColor: "#1D1D1D",
  },

];
const FunnelStageOptions = [

  {
    label: "Awareness",
    value: "Awareness",

    bgColor: "#6B9FED",
    textColor: "#1D1D1D",
  },
  {
    label: "Conversion",
    value: "Conversion",

    bgColor: "#9AE06E",
    textColor: "#1D1D1D",
  },

];
const NextStepsOptions = [

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
const PlatformOptions = [

  {
    label: "Facebook",
    value: "Facebook",

    bgColor: "#9AC3F4",
    textColor: "#1D1D1D",
  },
  {
    label: "Instagram",
    value: "Instagram",

    bgColor: "#E2C68F",
    textColor: "#1D1D1D",
  },
  {
    label: "Twitter",
    value: "Twitter",

    bgColor: "#BC93EF",
    textColor: "#1D1D1D",
  },
];
const COLUMNS = [

  {
    inputType: "textField",
    type: "text",
    key: "campaigns",
    fullWidth: true,
    defaultValue: "John",
    label: "Campaigns",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },

  {
    inputType: "select",
    key: "status",
    label: "Status",
    options: StatusOptions,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
      console.log("selectedUserType", selectedUserType)
      // return selectedUserType && selectedUserType.label;
      return <Chip
        sx={{
          backgroundColor: selectedUserType.bgColor,
          color: selectedUserType.textColor,
          fontSize: "10px !important",
          p: "5px 10px",
          maxHeight: "22px",

          "& .MuiChip-label": {
            p: 0,
          },
        }}
        // key={value}
        label={selectedUserType.label}
      />
    },
  },

  {
    inputType: "textField",
    type: "text",
    key: "goal",
    fullWidth: true,
    defaultValue: "Drive traffic to site, CPC >$2.25",
    label: "Goal",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },

  {
    inputType: "select",
    key: "funnelStage",
    fullWidth: true,
    label: "Funnel Stage",
    options: FunnelStageOptions,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
      return <Chip
        sx={{
          backgroundColor: selectedUserType.bgColor,
          color: selectedUserType.textColor,
          fontSize: "10px !important",
          p: "5px 10px",
          maxHeight: "22px",

          "& .MuiChip-label": {
            p: 0,
          },
        }}
        // key={value}
        label={selectedUserType.label}
      />
    },
  },


  {
    inputType: "datePicker",
    type: "dob",
    key: "startDate",
    fullWidth: true,
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
    fullWidth: true,
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
    inputType: "select",
    key: "nextSteps",
    fullWidth: true,
    label: "Next Steps",
    options: NextStepsOptions,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
      return <Chip
        sx={{
          backgroundColor: selectedUserType.bgColor,
          color: selectedUserType.textColor,
          fontSize: "10px !important",
          p: "5px 10px",
          maxHeight: "22px",

          "& .MuiChip-label": {
            p: 0,
          },
        }}
        key={selectedUserType && selectedUserType.value}
        label={selectedUserType && selectedUserType.label}
      />
    },
  },

  {
    inputType: "multi-select",
    type: "select",
    key: "platform",
    fullWidth: true,
    defaultValue: [],
    label: "Platform",
    options: PlatformOptions,
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


const CampaignsTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, } =
    useCampaignsTable();




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

export default CampaignsTable;