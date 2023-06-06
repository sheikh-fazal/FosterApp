import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useDocuments } from "./useDocuments";

const Documents = () => {
  const {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    user,
    isFetching,
    submitInitialHomeVisitDocument,
  } = useDocuments();

  return (
    <UploadDocuments
      readOnly={user?.defaultRole !== "FOSTER_CARER"}
      tableData={data?.initialDocuments}
      isLoading={isLoading}
      column={[
        "documentName",
        "documentType",
        "documentDate",
        "personUploaded",
        "password",
      ]}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      modalData={(data: any) => {
        console.log("data all the way here", data);
        submitInitialHomeVisitDocument(data);
      }}
      searchParam={(data: any) => {
        setSearchValue(data.search);
        console.log("Updated params: ", data);
      }}
      currentPage={data?.meta?.page}
      totalPages={data?.meta?.pages}
      onPageChange={(data: any) => {
        setPage((page) => data - 1);
      }}
    />
  );
};

export default Documents;
