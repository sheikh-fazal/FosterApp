import { Badge, Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";
import router from "next/router";

export const getColumns = (deleteList: any) => [
  {
    accessorFn: (row: any) => row?.id ?? "-",
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr. No</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.allegationDate ?? "-",
    id: "allegationDate",
    cell: (info: any) => {
      return <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>;
    },
    header: () => <span>Date of Allegation</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.status ?? "-",
    id: "status",
    cell: (info: any) => (
      <Badge
        invisible={info.badge}
        color="secondary"
        badgeContent="Draft"
        sx={styles.badge}
      >
        {info.getValue() ?? "-"}
      </Badge>
    ),
    header: () => <span>Status</span>,
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
                "/carer-info/personal-info/carer-chronology-of-events/allegation",
              query: { action: "edit", id: info?.row?.original?.id },
            })
          }
        />
        <DeleteModel
          onDeleteClick={() => deleteList(info?.row?.original?.id)}
        />
        <TableAction
          size="small"
          type="view"
          onClicked={() =>
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/allegation",
              query: { action: "view", id: info?.row?.original?.id },
            })
          }
        />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

//Styling
const styles: any = {
  badge: (theme: any) => ({
    "& .MuiBadge-badge": {
      fontSize: 9,
      top: 11,
      right: -22,
      height: 15,
      background: theme.palette.primary.main,
      cursor: "pointer",
    },
  }),
};
