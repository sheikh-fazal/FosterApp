import { useState } from "react";
import { useRouter } from "next/router";
import { TableDemoData } from ".";
import { Box, Checkbox, Typography } from "@mui/material";
import TableAction from "@root/components/TableAction";
import Image from "next/image";
import signCover from "../../../../assets/svg/reports/signCover.svg";

export const useUnannouncedHomeVisit = () => {
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
      accessorFn: (row: any) => row.visitDate,
      id: "visitDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.visitStatus,
      id: "visitStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Home Visit Status</span>,
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
      accessorFn: (row: any) => row.signature,
      id: "signature",
      cell: (info: any) => (
        <Typography sx={styles.imageCover}>
          <Image src={info.getValue()} width={30} height={30} alt="Picture" />
          <Typography sx={styles.image}>
            <Image src={signCover} width={30} height={30} alt="Picture" />
          </Typography>
        </Typography>
      ),
      header: () => <span>FC Signature</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* <ActionModal content={info} /> */}
          <TableAction
            size="small"
            type="view"
            onClicked={() => {
              router.push(
                "/reports/ifa-reports/unannounced-home-visit/view-unannounced-home-visit"
              );
            }}
          />
        </Box>
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

const styles = {
  imageCover: () => ({
    display: "flex",
    justifyContent: "center",
    position: "relative",
  }),
  image: () => ({
    position: "absolute",
  }),
};
