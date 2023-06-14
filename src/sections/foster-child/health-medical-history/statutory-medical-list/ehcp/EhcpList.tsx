import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useEhcpList } from "./useEhcpList";

const EhcpList = () => {
  const { ehcpListTableColumns, data, router } = useEhcpList();
  return (
    <>
      <Box>
        <TableHeader
          title="Child Therapy Info"
          searchKey="search"
          showAddBtn={true}
          onAdd={() =>
            router.push(
              `/foster-child/health-medical-history/statutory-medical-list/ehcp-info`
            )
          }
        />

        <CustomTable
          data={data?.data}
          columns={ehcpListTableColumns}
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

export default EhcpList;
