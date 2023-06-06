import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useGPDetailsList } from "./useGPDetailsList";

const GPDetailsList = () => {
  const { gpDetailsInfoTableColumns, tableHeaderRef, data, dataTable } =
  useGPDetailsList();
  return (
    <>
      <Box>
        <TableHeader
          ref={tableHeaderRef}
          title="Child GP Details"
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
          columns={gpDetailsInfoTableColumns}
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

export default GPDetailsList;
