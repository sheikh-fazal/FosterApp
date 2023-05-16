import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const DbsCheckTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      sentToCarerDate: "123",
      sentToDbsDate: "xyz",
      disclosureDate: "123",
      result: "07/02/2021",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.sentToCarerDate,
      id: "sentToCarerDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sent To Carer Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.sentToDbsDate,
      id: "sentToDbsDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sent To Dbs Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.disclosureDate,
      id: "disclosureDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Disclosure Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.result,
      id: "result",
      cell: (info: any) => info.getValue(),
      header: () => <span>Result</span>,
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
                  "/carer-info/background-checks/statutory-checks-list/dbs-check",
                query: { action: "edit", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/background-checks/statutory-checks-list/dbs-check",
                query: { action: "view", id: "" },
              })
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="DBS Check"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/dbs-check",
            query: { action: "add", id: "" },
          });
        }}
        onChanged={(data: any) => {}}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
};

export default DbsCheckTable;
