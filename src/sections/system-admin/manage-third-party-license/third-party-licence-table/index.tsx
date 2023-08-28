import { Box, Switch } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const thirdPartyLicenseColumnFunction = (
  router?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row.name,
    id: "name",
    cell: (info: any) => info.getValue(),
    header: () => <span>Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.type,
    id: "typeOfLicense",
    cell: (info: any) => info.getValue(),
    header: () => <span>Type of License</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.description,
    id: "description",
    cell: (info: any) => info.getValue(),
    header: () => <span>Description</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.guide_link,
    id: "guide",
    cell: (info: any) => info.getValue(),
    header: () => <span>Guide</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.email,
    id: "email",
    cell: (info: any) => info.getValue(),
    header: () => <span>Email</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.phone,
    id: "phone",
    cell: (info: any) => info.getValue(),
    header: () => <span>Phone</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.averageResponseTime,
    id: "enable-disable",
    cell: (info: any) => (
      <Switch
        inputProps={{ "aria-label": "Switch demo" }}
        defaultChecked={!info?.row?.original?.is_disabled}
      />
    ),
    header: () => <span>Enable/Disable</span>,
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          size="small"
          type="edit"
          onClicked={() =>
            router.push({
              pathname:
                "/system-admin/manage-third-party-license/edit-third-party-license-form",
              query: { action: "edit", id: info?.row?.original?.id },
            })
          }
        />
        <TableAction
          size="small"
          type="view"
          onClicked={() =>
            router.push({
              pathname:
                "/system-admin/manage-third-party-license/view-third-party-license-form",
              query: { action: "view", id: info?.row?.original?.id },
            })
          }
        />
        <TableAction
          type="delete"
          onClicked={() => prepareRecordForDelete?.(info?.row?.original?.id)}
        />
      </Box>
    ),

    header: () => <span>actions</span>,
    isSortable: false,
  },
];
