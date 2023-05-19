import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useDocument } from "./useDocument";

import { ViewDocument } from "./ViewDocument";

const Document = () => {
  const {
    theme,
    tableHeaderRef,
    page,
    setPage,
    searchValue,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    isSingleDocumentDetailViewed,
    SetIsSingleDocumentDetailViewed,
    initialHomeDocumentTableColumns,
    dataTemp,
    setDataTemp,
  } = useDocument();
  // console.log(data);

  return (
    <>
      <Box>
        <TableHeader
          ref={tableHeaderRef}
          title="Document"
          searchKey="search"
          onChanged={(data: any) => {
            setSearchValue(data.search);
            console.log("Updated params: ", data);
          }}
        />

        <CustomTable
          data={data?.initialDocuments}
          // data={dataTemp}
          columns={initialHomeDocumentTableColumns}
          isLoading={isLoading}
          isFetching={false}
          isError={isError}
          isPagination={true}
          isSuccess={isSuccess}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={data?.meta?.page}
          totalPages={data?.meta?.pages}
          onPageChange={(data: any) => {
            setPage((page) => data - 1);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          // rootSX={{ my: theme.spacing(2) }}
        />
      </Box>
      {isSingleDocumentDetailViewed && (
        <ViewDocument
          isModalOpen={isSingleDocumentDetailViewed}
          setIsModalOpen={SetIsSingleDocumentDetailViewed}
        />
      )}
    </>
  );
};

export default Document;
