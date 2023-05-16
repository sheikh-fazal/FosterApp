import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const MedicalAdvisorTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      medicalAppointment: "123",
      receivedFromDate: "xyz",
      renewDate: "123",
      receivedDate: "07/02/2021",
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
      accessorFn: (row: any) => row.medicalAppointment,
      id: "medicalAppointment",
      cell: (info: any) => info.getValue(),
      header: () => <span>Medical Appointment Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.receivedFromDate,
      id: "receivedFromDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Received From Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.renewDate,
      id: "renewDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Renew Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.receivedDate,
      id: "receivedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Received Date</span>,
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
                  "/carer-info/background-checks/statutory-checks-list/medical-advisor",
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
                  "/carer-info/background-checks/statutory-checks-list/medical-advisor",
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
        title="Medical Advisor"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/medical-advisor",
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

export default MedicalAdvisorTable;
