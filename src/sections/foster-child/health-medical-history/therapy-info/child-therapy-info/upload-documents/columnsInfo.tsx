import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
import { useRouter } from "next/router";
export const getColumns = (parms: any) => {
  const { handleDeleteChildTherapy, openUpdateViewModel, router } = parms;
  const query = router;
  const { fosterChildId } = query;
  return [
    {
      accessorFn: (row: any) => row.documentName,
      id: "Document Name",
      cell: (info: any) => info.getValue(),
      header: "Document Name",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "Document Type",
      cell: (info: any) => info.getValue(),
      header: "Appointment",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.createdAt,
      id: "Document Date",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: " Document Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.uploadBy,
      id: "Person Uploaded",
      cell: (info: any) => info.getValue(),
      header: " Person Uploaded",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "Password",
      cell: (info: any) => info.getValue(),
      header: " Password",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.f,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() => openUpdateViewModel(info.row.original.id, false)}
          />
          <TableAction size="small" type="download" />
          <TableAction
            size="small"
            type="view"
            onClicked={() => openUpdateViewModel(info.row.original.id)}
          />
          <TableAction
            size="small"
            type="delete"
            onClicked={() => handleDeleteChildTherapy(info.row.original.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
