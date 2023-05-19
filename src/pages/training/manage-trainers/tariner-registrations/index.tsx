import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";

const PAGE_TILE = "Trainer Registration managment";

TrainerRegistration.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "Manage Trainers",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function TrainerRegistration() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <div>Trainer Registration</div>
    </Page>
  );
}
