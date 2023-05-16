import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const initialHomeDocumentTableColumnsFunction = (
  SetIsSingleDocumentDetailViewed: any
) => [
  {
    accessorFn: (row: any) => row.u_id,
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr. No</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => {
      console.log(row);
      return row.documentName;
    },
    id: "documentName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Document Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.documentType,
    id: "documentType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Document Type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.createdAt,
    id: "documentDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Document Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.personUploaded,
    id: "personUploaded",
    cell: (info: any) => info.getValue(),
    header: () => <span>Person Uploaded</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.password,
    id: "password",
    cell: (info: any) => info.getValue(),
    header: () => <span>Password</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="view"
          onClicked={() => SetIsSingleDocumentDetailViewed(true)}
        />
      </Box>
    ),
    header: () => <span>Action</span>,
    isSortable: false,
  },
];

export const viewDocumentForm = [
  {
    type: "text",
    name: "documentType",
    label: "",
    title: "Document Type",
    gridSize: { xs: 12 },
  },
  {
    type: "text",
    name: "documentdate",
    label: "",
    title: "Document Date",
    gridSize: { xs: 12 },
  },
  {
    type: "text",
    name: "password",
    label: "",
    title: "Password to Open Document",
    gridSize: { xs: 12 },
  },
];
