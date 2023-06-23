import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTherapyInfoList } from "./useTherapyinfoList";
import { Box } from "@mui/material";

const TherapyInfoList = () => {
  const { therapyInfoTableColumns, tableHeaderRef, data, dataTable } =
    useTherapyInfoList();
  return (
    <>
      <Box>
        <TableHeader
          ref={tableHeaderRef}
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
          columns={therapyInfoTableColumns}
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

export default TherapyInfoList;
