import VocationalCourseInfoTable from "@root/sections/foster-child/vocational-course-info/vocational-course-info-table/VocationalCourseInfoTable";
import React from "react";

// export default function VocationalCourseInfo() {
//   return (
//     <div>
//       <VocationalCourseInfoTable />
//     </div>
//   );
// }
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import SubstituteCarerTable from "@root/sections/carer-info/substitute-cares/SubstituteCarerTable";
import { useGetSelectedSubstituteCarerQuery } from "@root/services/carer-info/substitute-carers/substituteCarerApi";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Vocational Course Info",
    href: "/foster-child",
  },
  {
    name: "Vocational Course Info List",
    href: "/foster-child/education-records/vocational-course-info",
  },
];

const PAGE_TITLE = "Vocational Course Info";

VocationalCourseInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function VocationalCourseInfo() {
  return <VocationalCourseInfoTable />;
}
