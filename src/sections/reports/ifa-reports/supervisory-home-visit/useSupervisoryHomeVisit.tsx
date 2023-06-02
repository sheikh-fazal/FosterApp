import { useRouter } from "next/router";
import { TableDemoData } from ".";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import Image from "next/image";

export const useSupervisoryHomeVisit = () => {
  const router = useRouter();
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.sNO,
      id: "S.NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.supervisingSocialWorker,
      id: "supervisingSocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.visitDate,
      id: "visitDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.visitType,
      id: "visitType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Visit Type</span>,
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
      accessorFn: (row: any) => row.locked,
      id: "locked",
      cell: (info: any) => info.getValue(),
      header: () => <span>Locked</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childOutcome,
      id: "childOutcome",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Outcome</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.signature,
      id: "signature",
      cell: (info: any) => (
        <Image
          src={info.getValue()}
          width={30}
          height={30}
          alt="Picture"
          style={{ margin: "0 auto" }}
        />
      ),
      header: () => <span>FC Signature</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          size="small"
          type="view"
          onClicked={() => {
            router.push(
              "/reports/ifa-reports/supervisory-home-visit/view-supervisory-home-visit"
            );
          }}
        />
      ),
      header: "Action",
      isSortable: false,
    },
  ];

  return {
    TableDemoData,
    router,
    columns,
  };
};