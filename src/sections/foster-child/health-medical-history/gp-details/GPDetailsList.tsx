import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useGPDetailsList } from "./useGPDetailsList";

const GPDetailsList = () => {
  const { gpDetailsInfoTableColumns, data, isLoading , isSuccess, isError , isFetching , setSearchValue , router, setPage} =
  useGPDetailsList();
  return (
    <>
      <Box>
        <TableHeader
          title="Child GP Details"
          searchKey="search"
          showAddBtn={true}
          onAdd={() => router.push('/foster-child/health-medical-history/gp-details/gp-details-info')}
            onChanged={(data: any) => {
              setSearchValue(data?.search);
            }}
        />

        <CustomTable
          data={data?.data?.gp_info}
          columns={gpDetailsInfoTableColumns}
          isLoading={isLoading}
          showSerialNo
          isFetching={isFetching}
          isError={isError}
          isPagination={true}
          isSuccess={isSuccess}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
            onPageChange={(data: any) => {
              setPage((page) => data - 1);
            }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
        />
      </Box>
    </>
  );
};

export default GPDetailsList;
