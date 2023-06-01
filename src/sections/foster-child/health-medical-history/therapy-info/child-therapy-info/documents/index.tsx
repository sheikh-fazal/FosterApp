import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const initialHomeDocumentTableColumnsFunction = (
  SetIsSingleDocumentDetailViewed: any
) => [
  {
    accessorFn: (row: any) => row.documentName,
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
