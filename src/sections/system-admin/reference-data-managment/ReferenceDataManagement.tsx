import FormTable from "@root/components/Table/FormTable";
import { useReferenceDataManagement } from './useReferenceDataManagement';
import { FormProvider } from "@root/components/hook-form";
import TableHeader from "@root/components/TableHeader";
import { Card } from "@mui/material";


const ReferenceDataManagement = () => {
  const { methods, handleSubmit, onSubmit, handlerAddRow } = useReferenceDataManagement();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 2 }}>
        <TableHeader title={'Dropdown Management'}   />
        <FormTable  
          tableKey="exampleTable"
          add
          onAddRowHandler={handlerAddRow}
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "refDataCode",
              defaultValue: "RD01",
              label: "Ref. Data Code",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required")
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "refDataName",
              defaultValue: "RD02",
              label: "Ref. Data Name",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required")
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "refDataValue",
              defaultValue: "Reporting and Recording Fostering",
              label: "Ref, Data Value",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required")
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "description",
              defaultValue: "categorize groups of people according to their cultural expression and identification",
              label: "Description",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required")
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "lastUpdatedDate",
              defaultValue: "Certificate Pending ",
              label: "Last Updated Date ",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required")
              },
            },
          ]}
        />
      </Card>

    </FormProvider>
  );
}

export default ReferenceDataManagement