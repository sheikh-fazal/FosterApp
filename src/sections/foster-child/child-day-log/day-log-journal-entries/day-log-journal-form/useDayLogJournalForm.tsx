// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { DayLogFormValidation, defaultValuesDayLogForm } from ".";
// import {
//   usePatchDayLogJournalEntriesMutation,
//   usePostDayLogJournalEntriesMutation,
// } from "@root/services/foster-child/child-day-log/DayLogJournalEntriesAPI";
// import { enqueueSnackbar } from "notistack";

// export const useDayLogJournalForm = (props: any) => {
//   const router = useRouter();
//   console.log(router, "router?.query");

//   const { disabled, defaultValues } = props;
//   console.log("defaultValues", defaultValues);

//   const methods: any = useForm({
//     resolver: yupResolver(DayLogFormValidation),
//     defaultValues: defaultValues ?? defaultValuesDayLogForm,
//   });

//   const {
//     handleSubmit,
//     formState: { errors, isSubmitting, isDirty },
//   } = methods;

//   const [PostDayLogJournalEntries] = usePostDayLogJournalEntriesMutation();
//   const [PatchDayLogJournalEntries] = usePatchDayLogJournalEntriesMutation();

//   const onSubmit = async (data: any) => {
//     console.log(data);
//     if (!!router?.query?.daylog_journal_id) {
//       return PatchDayLogJournalEntriesHandler(data);
//     }

//     // Post API of Day Log Journal
//     try {
//       const res: any = await PostDayLogJournalEntries(data).unwrap();
//       router.push(
//         `/foster-child/child-day-log/day-log-journal-entries/add-day-log-journal-form?daylog_journal_id=${res?.id}`
//       );
//       enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
//         variant: "success",
//       });
//     } catch (error: any) {
//       const errMsg = error?.data?.message;
//       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
//     }
//   };

//     // Patch API of Day Log Journal
//     const PatchDayLogJournalEntriesHandler = async (data: any) => {
//       const patchData = { body: data, id: router?.query?.family_person_id };
//       console.log(patchData);
  
//       try {
//         const res: any = await PatchDayLogJournalEntries(patchData).unwrap();
//         console.log(res);
//         if (
//           router?.asPath.split("/").pop() === "view" ||
//           router?.asPath.split("/").pop() === "edit"
//         ) {
//           router.push(
//             `/foster-child/child-day-log/day-log-journal-entries`
//           );
//         } else {
//           router.push(
//             `/foster-child/child-day-log/day-log-journal-entries/add-day-log-journal-form?daylog_journal_id=${router?.query?.daylog_journal_id}`
//           );
//         }
//         enqueueSnackbar(res?.message ?? `Details Updated Successfully`, {
//           variant: "success",
//         });
//       } catch (error: any) {
//         const errMsg = error?.data?.message;
//         enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
//       }
//     };

//   return {
//     methods,
//     disabled,
//     handleSubmit,
//     onSubmit,
//     router,
//     isSubmitting,
//   };
// };
