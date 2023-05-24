import { Card } from '@mui/material';
import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
// import { useCrudFormTable } from "./useCrudFormTable";
import dayjs from "dayjs";
import { Box, Button, Typography } from "@mui/material";
import { useDelegateCertificatesTable } from './useDelegateCertificatesTable';
// import theme from '@root/theme';

const DelegateCertificatesTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear } =
  useDelegateCertificatesTable();
    return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable moreActionBtn={true}
          tableKey="exampleTable"
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "attendee",
              defaultValue: "Remus Lupin (Foster Carer)",
              label: "Attendee",
              validation: (Yup: any) => {
                return Yup.string().required("Email is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "courseId",
              defaultValue: "256",
              label: "Course ID",
              validation: (Yup: any) => {
                return Yup.string().required("Email is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "courseName",
              defaultValue: "Reporting and Recording Fostering",
              label: "Course Name",
              validation: (Yup: any) => {
                return Yup.string().required("Email is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "courseType",
              defaultValue: "Devplan.PDF",
              label: "Course Type",
              validation: (Yup: any) => {
                return Yup.string().required("Email is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "status",
              defaultValue: "Certificate Pending ",
              label: "Status ",
              validation: (Yup: any) => {
                return Yup.string().required("Email is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "manageCertifiacte",
              defaultValue: "Delegate Certificate",
              label: "Manage Certificate",
              validation: (Yup: any) => {
                return Yup.string().required("Email is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "trainer",
              defaultValue: "Draco Malfoy ",
              label: "Trainer (If Applicable)",
              validation: (Yup: any) => {
                return Yup.string().required("Email is required").min(3);
              },
            },
            
          ]}
        />
        
      </FormProvider>
    );
}

export default DelegateCertificatesTable