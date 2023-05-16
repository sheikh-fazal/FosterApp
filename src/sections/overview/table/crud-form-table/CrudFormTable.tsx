import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useCrudFormTable } from "./useCrudFormTable";
import dayjs from "dayjs";
import { Box, Button, Typography } from "@mui/material";

export default function CrudFormTable() {
  const { methods, handleSubmit, tableData, onSubmit, onClear } =
    useCrudFormTable();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "Sajid",
            label: "Name",
            validation: (Yup: any) => {
              return Yup.string().required("Email is required").min(3);
            },
          },
          {
            inputType: "datePicker",
            type: "dob",
            key: "dob",
            defaultValue: new Date(),
            label: "DOB",
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
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Button variant="outlined" sx={{ ml: 2 }} onClick={onClear}>
        Clear
      </Button>
      <Box>
        <Typography component="h4" variant="h4">
          Table data:
        </Typography>
        {tableData}
      </Box>
    </FormProvider>
  );
}
