// import React from "react";
// import Link from "next/link";
// import { Grid } from "@mui/material";
// import { DayLogJournalFormData } from ".";
// import LoadingButton from "@mui/lab/LoadingButton";
// import { FormProvider } from "@root/components/hook-form";
// import { useDayLogJournalForm } from "./useDayLogJournalForm";

// export default function DayLogJournalForm(props: any) {
//   const { methods, handleSubmit, disabled, isSubmitting, onSubmit } =
//     useDayLogJournalForm(props);

//   return (
//     <>
//       <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//         <Grid container marginBottom={3}>
//           <Grid item xs={12} md={4} lg={4} xl={4}>
//             <span>Carer Name:</span>
//             <strong> Not Assigned </strong>
//           </Grid>
//           <Grid item xs={12} md={4} lg={4} xl={4}>
//             <span>Supervising Social Worker:</span>
//             <strong> Not Assigned </strong>
//           </Grid>
//           <Grid item xs={12} md={4} lg={4} xl={4}>
//             <span>User Name:</span>
//             <strong> Sangeetha Sigamani </strong>
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           {DayLogJournalFormData?.map((item: any) => (
//             <Grid item xs={12} md={item?.md} key={item?.id}>
//               <item.component
//                 {...item.componentProps}
//                 disabled={disabled}
//                 size={"small"}
//               >
//                 {item?.componentProps?.select
//                   ? item?.options?.map((option: any) => (
//                       <option key={option?.value} value={option?.value}>
//                         {option?.label}
//                       </option>
//                     ))
//                   : null}
//                 {item?.heading}
//               </item.component>
//             </Grid>
//           ))}
//           <Grid item xs={12}>
//             {!disabled && (
//               <LoadingButton
//                 type="submit"
//                 variant="contained"
//                 loading={isSubmitting}
//               >
//                 Submit
//               </LoadingButton>
//             )}
//             <Link href={"/foster-child/child-day-log/day-log-journal-entries"}>
//               <LoadingButton
//                 type="button"
//                 sx={{
//                   color: "#fff",
//                   ml: 1,
//                   backgroundColor: "#F6830F",
//                 }}
//                 variant="contained"
//               >
//                 Back
//               </LoadingButton>
//             </Link>
//           </Grid>
//         </Grid>
//       </FormProvider>
//     </>
//   );
// }
