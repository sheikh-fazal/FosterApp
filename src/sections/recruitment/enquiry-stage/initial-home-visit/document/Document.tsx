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
  } = useDocument();
  console.log(data);
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
          columns={initialHomeDocumentTableColumns}
          isLoading={isLoading}
          isFetching={false}
          isError={isError}
          isPagination={false}
          isSuccess={isSuccess}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
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
