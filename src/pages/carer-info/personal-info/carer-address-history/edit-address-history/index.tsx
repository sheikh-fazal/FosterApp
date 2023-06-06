import Page from "@root/components/Page";
import Layout from "@root/layouts";
import { CarerAddressHistory } from "@root/sections/carer-info/personal-info/carer-address-history";
import React from "react";
//  icons
import HomeIcon from "@mui/icons-material/Home";
import CarerAddressHistoryForm from "@root/sections/carer-info/personal-info/carer-address-history/CarerAddressHistoryForms";
import { Card } from "@mui/material";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Edit Carer Adrress",
    href: "",
  },
];
const PAGE_TITLE = "Carer Address History";

EditAddressHistory.getLayout = function getLayout(page: any) {
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

export default function EditAddressHistory() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <CarerAddressHistoryForm formType={"edit"} />
      </Card>
    </Page>
  );
}
