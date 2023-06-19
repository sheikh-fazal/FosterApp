import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useStatutoryMedicalTypeList } from "./useStatutoryMedicalTypeList";

const StatutoryMedicalTypeList = (props: any) => {
  console.log(props);
  const {
    statutoryMedicalListXTableColumns,
    data,
    router,
    setHeaderHeading,
    setSearchValue,
    setPage,
  } = useStatutoryMedicalTypeList(props);
  return (
    <>
      <Box>
        <TableHeader
          title={setHeaderHeading(props.type)}
          searchKey="search"
          showAddBtn={true}
          searchParam={(data: any) => {
            setSearchValue(data.search);
          }}
          onAdd={() =>
            router.push(
              `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type?type=${props.type}`
            )
          }
        />

        <CustomTable
          data={data?.data}
          columns={statutoryMedicalListXTableColumns}
          isLoading={false}
          showSerialNo
          isFetching={false}
          isError={false}
          isPagination={true}
          isSuccess={true}
          currentPage={data?.meta?.page ?? 1}
          totalPages={data?.meta?.pages ?? 2}
          onPageChange={(pageNo: any) => {
            setPage((page) => (pageNo - 1) * 10);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
        />
      </Box>
    </>
  );
};

export default StatutoryMedicalTypeList;
