import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Box, Button, Chip, Typography } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import { useResults } from "./useResults";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

///---------------------------------
// Constants

const TYPEOFPOST = [
  {
    label: "Organic",
    value: "Organic",
    bgColor: "#BEA2FA",
    textColor: "#1D1D1D",
  },
  {
    label: "Paid Campaign",
    value: "Paid Campaign",
    bgColor: "#89CDFF",
    textColor: "#1D1D1D",
  },
  {
    label: "Evergreen Content",
    value: "Evergreen Content",
    bgColor: "#8CFFA5",
    textColor: "#1D1D1D",
  },
  {
    label: "Launch",
    value: "Launch",
    bgColor: "#CDFF8C",
    textColor: "#1D1D1D",
  },
];



const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "postTopic",
    defaultValue: "John",
    label: "Post Topic",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "datePicker",
    type: "dob",
    key: "publishDate",
    defaultValue: new Date(),
    label: "Publish Date",
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
    key: "TypeOfPost",
    label: "Type of Post",
    options: TYPEOFPOST,
    validation: (Yup: any) => {
      return Yup.string().required("Type of Post is required");
    },
    format: (selectedUserType: any) => {
      return selectedUserType && selectedUserType.label;
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "impressions",
    defaultValue: "10756",
    label: "Impressions",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "engagements",
    defaultValue: "39542",
    label: "Engagements",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "engagementsRate",
    defaultValue: "2.18%",
    label: "Engagements Rate",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "spend",
    defaultValue: "$0.00",
    label: "Spend",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "costPerEngagement",
    defaultValue: "$0.00",
    label: "Cost Per Engagement",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
];

///---------------------------------
// This component is here for testing purposes only
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

///---------------------------------

export default function Results() {
  const { methods, handleSubmit, tableData, onSubmit, onClear } =
    useResults();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        columns={COLUMNS}
      />
    </FormProvider>
  );
}
