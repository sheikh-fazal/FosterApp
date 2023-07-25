// import React from 'react'
// import { useDayLogDocument } from './useDayLogDocument';
// import UploadDocuments from '@root/sections/documents/UploadDocuments';

// export const DayLogDocument = () => {
//     const {
//         data,
//         router,
//         isError,
//         isLoading,
//         isSuccess,
//         isFetching,
//         setPage,
//         setSearchValue,
//         listDeleteHandler,
//         submitDayLogJournalDocumentData,
//       }: any = useDayLogDocument();
    
//       console.log(data);
    
//       return (
//         <>
//           <UploadDocuments
//             readOnly={router?.asPath.split("/").pop() === "view"}
//             searchParam={(data: any) => {
//               setSearchValue(data.search);
//             }}
//             tableData={data?.data}
//             isLoading={isLoading}
//             isFetching={isFetching}
//             isError={isError}
//             isSuccess={isSuccess}
//             modalData={(data: any) => {
//               console.log("data all the way here", data);
//               submitDayLogJournalDocumentData(data);
//             }}
//             column={["documentName", "documentType", "documentDate", "personName", "password"]}
//             onPageChange={(pageNo: any) => {
//               setPage(() => (pageNo - 1) * 10);
//             }}
//             currentPage={data?.data?.meta?.page}
//             totalPages={data?.data?.meta?.pages}
//             onDelete={(data: any) =>{listDeleteHandler(data?.id);  console.log("Deleting", data);}
//           }
//           />
//         </>
//       );
// }
