import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import TrainingProfileTable from "@root/sections/carer-info/training-profile/TrainingProfile";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Trainings List",
    href: "",
  },
];

const PAGE_TITLE = "Training Profile";
// ----------------------------------------------------------------------

TrainingProfile.getLayout = function getLayout(page: any) {
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

// ----------------------------------------------------------------------

export default function TrainingProfile() {
  return (
    <Page title={PAGE_TITLE}>
      <TrainingProfileTable />
    </Page>
  )
}
