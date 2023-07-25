// import { enqueueSnackbar } from "notistack";
// import { useTableParams } from "@root/hooks/useTableParams";
// import { useDeleteDayLogJournalEntriesMutation, useGetDayLogJournalEntriesQuery } from "@root/services/foster-child/child-day-log/DayLogJournalEntriesAPI";

// export default function useDayLogJournalEntriesTable() {
//   const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
//     useTableParams();

//   const { data, isError, isLoading, isSuccess, isFetching } =
//   useGetDayLogJournalEntriesQuery<any>({ params });

//   const [deleteList] = useDeleteDayLogJournalEntriesMutation();

//   //   DELETE API For Day Log Journal Entries
//   const listDeleteHandler = (id: any) => {
//     deleteList(id)
//       .unwrap()
//       .then((res: any) => {
//         enqueueSnackbar("Information Deleted Successfully", {
//           variant: "success",
//         });
//       })
//       .catch((error) => {
//         const errMsg = error?.data?.message;
//         enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
//       });
//   };

//   return {
//     data,
//     headerChangeHandler,
//     isError,
//     isLoading,
//     isSuccess,
//     isFetching,
//     listDeleteHandler,
//     pageChangeHandler,
//     sortChangeHandler,
//   };
// }
