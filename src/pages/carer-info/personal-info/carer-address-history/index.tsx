import Page from "@root/components/Page";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Card } from "@mui/material";
import { CarerAddressHistoryTable } from "@root/sections/carer-info/personal-info/carer-address-history/CarerAddressTable";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Carer Adrress List",
    href: "/carer-info/personal-info/appliation-form",
  },
];
const PAGE_TITLE = "Carer Address History";

AddressHistory.getLayout = function getLayout(page: any) {
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

export default function AddressHistory() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <CarerAddressHistoryTable />
      </Card>
    </Page>
  );
}
