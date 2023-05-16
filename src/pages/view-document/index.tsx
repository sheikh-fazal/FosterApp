import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ViewDocument from "@root/sections/recruitment/view-document/ViewDocument";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Ready For Placement",
    href: "",
  },
  {
    name: "Placement Preferences",
    href: "",
  },
];

const PAGE_TITLE = "Recruitment";
ViewDocuments.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function ViewDocuments() {
  // -------
  return <ViewDocument />;
}
