import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";

const PetQuestionnaire = () => {
  const router = useRouter();
  const tableHeaderRef = useRef<any>();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      questionnaireDate: "10/10/2021",
      nextInspectionDate: "11/10/2021",
      petName: "Dog",
      status: "Yes",
    },
    {
      srNo: 2,
      questionnaireDate: "10/10/2021",
      nextInspectionDate: "11/10/2021",
      petName: "Dog",
      status: "Yes",
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
      accessorFn: (row: any) => row.questionnaireDate,
      id: "questionnaireDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Pet Questionnaire Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.nextInspectionDate,
      id: "nextInspectionDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Next Inspection Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.petName,
      id: "petName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of Pet</span>,
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
              "/carer-info/personal-info/carer-chronology-of-events/pet-questionnaire"
            )
          }
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          title="Questionaire"
          searchKey="search"
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
      </Box>
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
};

export default PetQuestionnaire;
