import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-form/AbsenceInfoForm";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { AbsenceInfoDocument } from "@root/sections/foster-child/education-records/absence-info/absence-info-document/AbsenceInfoDocument";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
// Constants


const PAGE_TITLE = "Absence Info";
AbsenceInfoFormLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      // showTitleWithBreadcrumbs
      // breadcrumbs={BREADCRUMBS}
      // title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function AbsenceInfoFormLayout() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Absence Info List",
      href: "/foster-child/education-records/absence-info",
      query: { fosterChildId: fosterChildId },
    },
    {
      name: "Absence Info",
      href: "",
    },
  ];
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
    <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
      <AbsenceInfoForm fosterChildId={fosterChildId}/>
      <AbsenceInfoDocument fosterChildId={fosterChildId}/>
    </HorizaontalTabs>
    </Box>
  );
}
// import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import Layout from "@root/layouts";

// import AbsenceInfoListTable from "@root/sections/foster-child/education-records/absence-info/AbsenceInfoListTable";
// import { useRouter } from "next/router";
// import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// AbsenceInfo.getLayout = function getLayout(page: any) {
//   return <Layout>{page}</Layout>;
// };

// export default function AbsenceInfo() {
//   const Router: any = useRouter();
//   const { fosterChildId } = Router.query;
//   const BREADCRUMBS = [
//     {
//       icon: <HomeIcon />,
//       name: "Child Info",
//       href: {
//         pathname: "/foster-child",
//         query: { fosterChildId: fosterChildId },
//       },
//     },
//     {
//       name: "Absence Info List",
//       href: "/foster-child/education-records/absence-info",
//     },
//   ];

//   const PAGE_TITLE = "Absence Info";
//   return (
//     <Box>
//       <TitleWithBreadcrumbLinks
//         sx={{ mb: 2 }}
//         breadcrumbs={BREADCRUMBS}
//         title={PAGE_TITLE}
//       />
//       <AbsenceInfoListTable fosterChildId={fosterChildId} />
//     </Box>
//   );
// }
