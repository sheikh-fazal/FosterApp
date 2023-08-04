import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { Box, Grid, Paper } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import router from "next/router";
import { Dummy } from ".";
import { useIncidentTable } from "./useIncidentTable";

const IncidentTable = (props: any) => {
  const activepath = "/foster-child/events-and-notification/incident/actions";
  const { fosterChildId } = props;
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
  } = useIncidentTable();
  const columns = [
    {
      accessorFn: (row: any) => row?.nameOfIncident,
      id: "nameOfIncident",
      cell: (info: any) => info.getValue(),
      header: "Name Of Incident",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dateOfIncident,
      id: "dateOfIncident",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("DD MMM YYYY")}</Box>;
      },
      header: "Date of Incident",
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
                pathname: activepath,
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname: activepath,
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Incident"
                  searchKey="search"
                  showAddBtn
                  onChanged={(e: any) => {}}
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", fosterChildId: fosterChildId },
                    });
                  }}
                />
              </Box>
              <CustomTable
                data={Dummy ?? []}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                isPagination={true}
                showSerialNo={true}
                //   totalPages={hospitalizationdata?.data?.meta?.pages ?? 0}
                //   currentPage={hospitalizationdata?.data?.meta?.page ?? 1}
                //   onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
              />
              {/* <CustomTable
        // data={data?.data?.cc_incident_info}
        columns={columns}
        // isLoading={isLoading}
        // isFetching={isFetching}
        // isError={isError}
        // isSuccess={isSuccess}
        // currentPage={data?.data?.metameta?.page}
        // totalPages={data?.data?.metameta?.pages}
        showSerialNo
        isPagination
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
      /> */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default IncidentTable;