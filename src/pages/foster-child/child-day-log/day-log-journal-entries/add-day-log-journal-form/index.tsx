// import React from "react";
// //  @mui icons
// import Layout from "@root/layouts";
// import { Paper } from "@mui/material";
// import Page from "@root/components/Page";
// import HomeIcon from "@mui/icons-material/Home";
// import HorizaontalTabs from "@root/components/HorizaontalTabs";
// import DayLogJournalForm from "@root/sections/foster-child/child-day-log/day-log-journal-entries/day-log-journal-form/DayLogJournalForm";
// import { DayLogDocument } from "@root/sections/foster-child/child-day-log/day-log-journal-entries/child-day-log-document/DayLogDocument";
// import { useRouter } from "next/router";
// import { useGetDayLogJournalEntriesByIdQuery } from "@root/services/foster-child/child-day-log/DayLogJournalEntriesAPI";

// // ----------------------------------------------------------------------
// // Constants
// const BREADCRUMBS = [
//   {
//     icon: <HomeIcon />,
//     name: "Day Log/Journal Entries List",
//     href: "/foster-child/child-day-log/day-log-journal-entries",
//   },
//   {
//     name: "Day Log / Journal Entry",
//     href: "",
//   },
// ];

// const PAGE_TITLE = "Day Log/Journal Entries";
// // ----------------------------------------------------------------------

// AddDayLogJournal.getLayout = function getLayout(page: any) {
//   return (
//     <Layout
//       showTitleWithBreadcrumbs
//       breadcrumbs={BREADCRUMBS}
//       title={PAGE_TITLE}
//     >
//       {page}
//     </Layout>
//   );
// };

// export default function AddDayLogJournal() {
//   const { query } = useRouter();
//   console.log(query);

//   const daylogjournalId = query["daylog_journal_id"];
//   const { data, isLoading, isSuccess, isError } =
//     useGetDayLogJournalEntriesByIdQuery(daylogjournalId, {
//       skip: !daylogjournalId,
//     });

//   return (
//     <Page title={PAGE_TITLE}>
//       <Paper elevation={3}>
//         <HorizaontalTabs
//           tabsDataArray={["Day Log Journal", "Uploaded documents"]}
//         >
//           {/*  Day Log Journal Form   */}
//           <DayLogJournalForm defaultValues={data?.[0]} />

//           {/*  Upload Document   */}
//           <DayLogDocument />
//         </HorizaontalTabs>
//       </Paper>
//     </Page>
//   );
// }
