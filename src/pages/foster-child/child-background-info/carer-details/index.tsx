import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { Stack } from "@mui/material";
import { CarerDetailsHeader } from "@root/sections/foster-child/child-background-info/carer-details/carer-details-header";
import { CarerDetailsForm } from "@root/sections/foster-child/child-background-info/carer-details";
import HorizaontalTabs from "@root/components/HorizaontalTabs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Carer Details";

// ----------------------------------------------------------------------

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/",
  },
  {
    name: PAGE_TITLE,
    href: "",
  },
];

// ----------------------------------------------------------------------

CarerDetails.getLayout = function getLayout(page: any) {
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

export default function CarerDetails() {
  return (
    <Page title={PAGE_TITLE}>
      <Stack direction={"column"} spacing={2}>
        <CarerDetailsHeader />
        <HorizaontalTabs
          tabsDataArray={[
            "Primary Carer",
            "Secondary Carer",
            "Backup Carer",
            "Respite Carer",
            "Swap Carer",
          ]}
        >
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
        </HorizaontalTabs>
      </Stack>
    </Page>
  );
}
