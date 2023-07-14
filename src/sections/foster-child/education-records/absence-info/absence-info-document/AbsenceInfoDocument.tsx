import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useAbsenceInfoDocument } from "./useAbsenceInfoDocument";

export const AbsenceInfoDocument = () => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    setPage,
    submitAbsenceInfoDocumentData,
    setSearchValue,
    listDeleteHandler,
  }: any = useAbsenceInfoDocument();

  return (
    <>
      <UploadDocuments
        readOnly={false}
        searchParam={(data: any) => {
          setSearchValue(data.search);
        }}
        tableData={data?.data}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        column={[
          "documentName",
          "documentType",
          "documentDate",
          "personName",
          "password",
        ]}
        modalData={(data: any) => {
          console.log("searched Value", data);
          submitAbsenceInfoDocumentData(data);
        }}
        onPageChange={(page: any) => {
          setPage(() => (page - 1) * 10);
        }}
        currentPage={data?.data?.meta?.data}
        totalPages={data?.data?.meta?.data}
        onDelete={(data: any) => {
          listDeleteHandler(data?.childAbsenceInfoId);
        }}
      />
    </>
  );
};
