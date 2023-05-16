import TableAction from "@root/components/TableAction";
import router from "next/router";

export const columns = [
  {
    accessorFn: (row: any) => row.srNo,
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr. No</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.reportingTime,
    id: "reportingTime",
    cell: (info: any) => info.getValue(),
    header: () => <span>Reporting Time</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.placementRequired,
    id: "placementRequired",
    cell: (info: any) => info.getValue(),
    header: () => <span>Emergency Placement Required</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => info.getValue(),
    header: () => <span>Status</span>,
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <TableAction
        size="small"
        type="view"
        onClicked={() =>
          router.push(
            "/carer-info/personal-info/carer-chronology-of-events/ooh-report"
          )
        }
      />
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];
