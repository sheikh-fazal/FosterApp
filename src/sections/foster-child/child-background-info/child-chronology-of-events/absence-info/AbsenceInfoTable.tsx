import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { useAbsenceInfoTable } from "./useAbsenceInfoTable";

const AbsenceInfoTable = () => {
  const {
    listDeleteHandler,
    router,
    tableHeaderRefTwo,
    setSearch,
    data,
    sortChangeHandler,
    pageChangeHandler,
    isSuccess,
    isFetching,
    isError,
    isLoading,
  } = useAbsenceInfoTable();
  const columns = [
    {
      accessorFn: (row: any) => row?.dateOfAbsence,
      id: "dateOfAbsence",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("D MMM YYYY")}</Box>;
      },
      header: "Date of Occurence",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dateOfReturnFromAbsence,
      id: "dateOfReturnFromAbsence",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("D MMM YYYY")}</Box>;
      },
      header: "Date of Return",
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row?.reasonForAbsence,
      id: "reasonForAbsence",
      cell: (info: any) => info.getValue(),
      header: "Reason For Absence",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-background-info/child-chronology-of-events/absence-info",
                query: { action: "edit", id: info?.row?.original?.id },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)} />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-background-info/child-chronology-of-events/absence-info",
                query: { action: "view", id: info?.row?.original?.id },
              })
            }
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title=""
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: "/foster-child/child-background-info/child-chronology-of-events/absence-info",
            query: { action: "add", id: "" },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={data?.data?.child_chronology_of_events}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={data?.data?.metameta?.page}
        totalPages={data?.data?.metameta?.pages}
        showSerialNo
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default AbsenceInfoTable;