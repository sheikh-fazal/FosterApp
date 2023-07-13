// components

import { useContentIdeas } from "./useContentIdeas";
// form react hook
import { FormProvider } from "@root/components/hook-form";
import FormTable from "@root/components/Table/FormTable";
import { Box, Chip } from "@mui/material";
import { ARTICLEOPTIONS, PERSONAOPTIONS, VERTICALOPTIONS } from ".";
import dayjs from "dayjs";
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
const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "title",
    defaultValue: "John",
    label: "Tilte",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "multi-select",
    type: "select",
    key: "article",
    defaultValue: [],
    label: "Article",
    options: ARTICLEOPTIONS,
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
    inputType: "multi-select",
    type: "select",
    key: "persona",
    defaultValue: [],
    label: "Persona",
    options: PERSONAOPTIONS,
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
    key: "vertical",
    defaultValue: [],
    label: "vertical",
    options: VERTICALOPTIONS,
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

];

const ContentIdeas = () => {
  const { methods, handleSubmit, onSubmit, onClear } = useContentIdeas();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <FormTable tableKey="exampleTable" columns={COLUMNS} />
  </FormProvider>
  );
};

export default ContentIdeas;
