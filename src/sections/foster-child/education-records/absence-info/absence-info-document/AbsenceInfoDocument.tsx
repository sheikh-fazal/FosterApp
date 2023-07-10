import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useAbsenceInfoDocument } from "./useAbsenceInfoDocument";

export const AbsenceInfoDocument = () => {
 
const {data, isLoading, isFetching, isError, isSuccess, submitAbsenceInfoDocumentData, setSearchValue} : any = useAbsenceInfoDocument();

return (
  <>
     <UploadDocuments
      readOnly={true}
      searchParam={(data: any) =>{
          setSearchValue(data.search)
      }
      //   console.log("searched Value", searchedText)
      }
      tableData={data?.data}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      column={["document", "documentType", "DocumentDate", "personName", "password"]}
      modalData={(data: any) => {
        console.log("searched Value", data);
        submitAbsenceInfoDocumentData(data)
      }}
      onPageChange={(page: any) => console.log("parent log", page)}
      currentPage={"1"}
      totalPages={"1"}
    />
  </>
);
}