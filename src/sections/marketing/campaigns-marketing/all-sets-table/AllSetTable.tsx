import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { Card } from "@mui/material";
import { useAllSetTable } from "./useAllSetTable";

const AllSetTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
  useAllSetTable();
  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "adSet",
              defaultValue: "Family-safety-security",
              label: "Ad Set",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "creative",
              defaultValue: "image under development",
              label: "Creative",
              validation: (Yup: any) => { },
            },

            {
              inputType: "textField",
              type: "text",
              key: "copy",
              defaultValue: "There's an easier way to keep your home and family safe. ",
              label: "Copy",
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
            {
              inputType: "textField",
              type: "text",
              key: "campaigns",
              defaultValue: "Drone- Security",
              label: "Campaigns",
              validation: (Yup: any) => { },
            },

          ]}
        />
      </FormProvider>
    </Card>

  );
};

export default AllSetTable;