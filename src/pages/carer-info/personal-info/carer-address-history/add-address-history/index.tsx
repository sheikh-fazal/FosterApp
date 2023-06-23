import Page from "@root/components/Page";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CarerAddressHistoryForm from "@root/sections/carer-info/personal-info/carer-address-history/CarerAddressHistoryForms";
import { Card } from "@mui/material";
import { defaultValues } from "@root/sections/carer-info/personal-info/carer-address-history";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Carer Adrress",
    href: "",
  },
];
const PAGE_TITLE = "Carer Address History";

AddAddressHistory.getLayout = function getLayout(page: any) {
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

export default function AddAddressHistory() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <CarerAddressHistoryForm
          historyData={{ ...defaultValues }}
          formType={"add"}
        />
      </Card>
    </Page>
  );
}
