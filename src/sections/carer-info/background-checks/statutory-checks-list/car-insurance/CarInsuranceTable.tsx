import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const CarInsuranceTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      registerNumber: "123",
      insuranceName: "xyz",
      policyNumber: "123",
      validDate: "07/02/2021",
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
      accessorFn: (row: any) => row.registerNumber,
      id: "registerNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Register Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.insuranceName,
      id: "insuranceName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Insurance Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.policyNumber,
      id: "policyNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Policy Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.validDate,
      id: "validDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Valid Date</span>,
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
                  "/carer-info/background-checks/statutory-checks-list/car-insurance",
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
                  "/carer-info/background-checks/statutory-checks-list/car-insurance",
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
        title="Car Insurance"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/car-insurance",
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

export default CarInsuranceTable;
