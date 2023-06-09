import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useOpticianCheckList } from "./useOpticianCheckList";


const OpticianCheckList = () => {
  const { opticianCheckListTableColumns, data, dataTable } =
  useOpticianCheckList();
  return (
    <>
      <Box>
        <TableHeader
          title="Child Therapy Info"
          searchKey="search"
          showAddBtn={true}
          // onAdd={() => setOpenModal(true)}
          //   onChanged={(data: any) => {
          //     setSearchValue(data.search);
          //     console.log("Updated params: ", data);
          //   }}
        />

        <CustomTable
          data={dataTable}
          columns={opticianCheckListTableColumns}
          isLoading={false}
          showSerialNo
          isFetching={false}
          isError={false}
          isPagination={true}
          isSuccess={true}
          currentPage={data?.meta?.page ?? 1}
          totalPages={data?.meta?.pages ?? 2}
          //   onPageChange={(data: any) => {
          //     setPage((page) => data - 1);
          //   }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
        />
      </Box>
    </>
  );
};

export default OpticianCheckList;
