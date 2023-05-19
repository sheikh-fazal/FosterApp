export const UPLOAD_DOCUMENTS = [
  {
    srNo: 1,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
  {
    srNo: 2,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
  {
    srNo: 3,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
];

import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";

export const UploadDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  type: "",
  documentDate: new Date(),
  password: "",
};
export const formSchema = Yup.object().shape({
  type: Yup.string().required("required"),
  documentDate: Yup.date().required("required"),
  password: Yup.string().required("required"),
});
export const getColumns = (deleteList: any) => [
  {
    accessorFn: (row: any) => row.id ?? "-",
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr. No</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.documentName ?? "-",
    id: "documentName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Document Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.type,
    id: "documentType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Document Type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.documentDate ?? "-",
    id: "documentDate",
    cell: (info: any) => {
      return <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>;
    },
    header: () => <span>Date of Allegation</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.personUploaded ?? "-",
    id: "personUploaded",
    cell: (info: any) => info.getValue(),
    header: () => <span>Person Uploaded</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.password ?? "-",
    id: "password",
    cell: (info: any) => info.getValue(),
    header: () => <span>Password</span>,
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
        <TableAction
          size="small"
          type="download"
          onClicked={() => alert("Download")}
        />
        <TableAction
          size="small"
          type="view"
          onClicked={() => alert("hello")}
        />
        {/* Delete Modal */}
        <DeleteModel onDeleteClick={() => deleteList(info.srNo)} />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];
