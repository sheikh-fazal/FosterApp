// import React, { useEffect } from "react";
// //  @mui icons
// import HomeIcon from "@mui/icons-material/Home";
// import Layout from "@root/layouts";
// import { Paper } from "@mui/material";
// import Page from "@root/components/Page";
// import { useRouter } from "next/router";
// import { CLADocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";

// // ----------------------------------------------------------------------
// // Constants
// const BREADCRUMBS = [
//   {
//     icon: <HomeIcon />,
//     name: "CLA Documentation List",
//     href: "/foster-child/child-background-info/cla-documentation",
//   },
//   {
//     name: "CLA Document",
//     href: "/",

//   },
// ];

// let PAGE_TITLE: any;
// // ----------------------------------------------------------------------

// ClaDocumentationForm.getLayout = function getLayout(page: any) {
//   const router = useRouter();
//   PAGE_TITLE = `View ${router?.query?.cla_document_type} Document`
//   return (
//     <Layout
//       showTitleWithBreadcrumbs
//       breadcrumbs={BREADCRUMBS}
//       title={PAGE_TITLE}>
//       {page}
//     </Layout>
//   );
// };

// export default function ClaDocumentationForm() {
//   const router = useRouter();
//   PAGE_TITLE = `View ${router?.query?.cla_document_type} Document`


//   return (
//     <Page title={PAGE_TITLE}>
//       <Paper elevation={3}>
//         <CLADocumentationForm />
//       </Paper>
//     </Page>
//   );
// }

