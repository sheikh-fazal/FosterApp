import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useTableParams } from "@root/hooks/useTableParams";
import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteOOHReportsListMutation,
  useGetOOHReportsListQuery,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/OOHReportsAPI";

const OOHReportsTable = () => {
  const meetingListColumns = [
    {
      accessorFn: (row: any) => row?.reportingDateAndTime,
      id: "reportingDateAndTime",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Reporting Date and Time",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.emergencyPlacementRequired,
      id: "emergencyPlacementRequired",
      cell: (info: any) => info.getValue(),
      header: "Emergency Placement Required",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: "Status",
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
                  "/foster-child/child-background-info/child-chronology-of-events/ooh-reports",
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
                  "/foster-child/child-background-info/child-chronology-of-events/ooh-reports",
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
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const {
    data: OOHReportsList,
    isError: OOHReportsListError,
    isLoading: OOHReportsListIsloading,
    isFetching: OOHReportsListIsfetching,
    isSuccess: OOHReportsListIsSuccess,
  }: any = useGetOOHReportsListQuery({ search: search });
  const OOHReportsData = OOHReportsList?.data?.child_chronology_of_events;
  console.log("🚀 ~ file: index.tsx:95 ~ OOHReportsTable ~ OOHReportsList:", OOHReportsData);
  const meta = OOHReportsList?.data?.meta;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } = useTableParams();

  const [deleteList] = useDeleteOOHReportsListMutation();
  //DELETE API For Allegation List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title=""
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: "/foster-child/child-background-info/child-chronology-of-events/day-log",
            query: { action: "add", id: "" },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={OOHReportsData}
        columns={meetingListColumns}
        isLoading={OOHReportsListIsloading}
        isFetching={OOHReportsListIsfetching}
        isError={OOHReportsListError}
        isSuccess={OOHReportsListIsSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default OOHReportsTable;
