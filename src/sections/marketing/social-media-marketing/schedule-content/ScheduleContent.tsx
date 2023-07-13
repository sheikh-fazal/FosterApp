import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Box, Button, Chip, Typography } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import { useScheduleContent } from "./useScheduleContent";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

///---------------------------------
// Constants

const STATUS = [
  {
    label: "In Progress",
    value: "In Progress",
    bgColor: "#BEA2FA",
    textColor: "#1D1D1D",
  },
  {
    label: "Live",
    value: "Live",
    bgColor: "#89CDFF",
    textColor: "#1D1D1D",
  },
  {
    label: "On Hold",
    value: "On Hold",
    bgColor: "#8CFFA5",
    textColor: "#1D1D1D",
  },
  {
    label: "Planning",
    value: "Planning",
    bgColor: "#94E4D6",
    textColor: "#1D1D1D",
  },
];

const CHANNELS = [
  {
    label: "Twitter",
    value: "Twitter",
    bgColor: "#D6ADEA",
    textColor: "#1D1D1D",
  },
  {
    label: "Linkedin",
    value: "Linkedin",
    bgColor: "#ADE6EA",
    textColor: "#1D1D1D",
  },
  {
    label: "Instagram",
    value: "Instagram",
    bgColor: "#6BD5ED",
    textColor: "#1D1D1D",
  },
  {
    label: "TikTok",
    value: "TikTok",
    bgColor: "#E0C06E",
    textColor: "#1D1D1D",
  },
  {
    label: "Facebook",
    value: "Facebook",
    bgColor: "#BC6EE0",
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
    key: "dateTime",
    defaultValue: new Date(),
    label: "Date & Time",
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
    inputType: "multi-select",
    type: "select",
    key: "status",
    defaultValue: [],
    label: "Status",
    options: STATUS,
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
    inputType: "multi-select",
    type: "select",
    key: "channels",
    defaultValue: [],
    label: "Channels",
    options: CHANNELS,
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
    key: "copy",
    defaultValue: "Drive traffic to site, CPC >$2.25",
    label: "Copy",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "file",
    type: "file",
    key: "image",
    label: "Image",
    size: { xs: 12, md: 12 },
    // Use this validation for images
    validation: (Yup: any) => {
      return Yup.mixed()
        .test("required", "Image is required", (value: any) => {
          if (!value) return false;
          if (typeof value === "string") return !!value;
          return value.type;
        })
        .test("fileFormat", "Unsupported Format", (value: any) => {
          if (!value) return false;
          if (typeof value === "string") return !!value;
          return value && FILE_FORMATS.includes(value.type);
        })
        .test(
          "fileSize",
          `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
          (value: any) => {
            if (!value) return false;
            if (typeof value === "string") return !!value;
            return value && value.size <= MAX_FILE_SIZE;
          }
        );
    },
    format: (imgUrl: any) => {
      if (!!imgUrl)
        return (
          <MyAvatar
            src={String(`${process.env.NEXT_PUBLIC_IMG_URL}${imgUrl}`)}
            sx={{
              mx: "auto",
            }}
          />
        );

      return "-";
    },
  },

  {
    inputType: "textField",
    type: "text",
    key: "socialMediaOwner",
    defaultValue: "John",
    label: "Social Media Owner",
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

export default function ScheduleContent() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
    useScheduleContent();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        beforeAdd={(methods: any) => uploadImage("image", methods)}
        beforeUpdate={(methods: any) => uploadImage("image", methods)}
        columns={COLUMNS}
      />
    </FormProvider>
  );
}
