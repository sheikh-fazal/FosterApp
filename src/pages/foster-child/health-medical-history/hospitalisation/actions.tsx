import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import HospitalizationFrom from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationFrom";
import HospitalizationUploadTable from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationUploadTable";

Hospitalisation.getLayout = function GetLayout(page: any) {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  // Constants

  const PAGE_TITLE = "Hospitalization";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "Hospitalization Info list",
      href: "",
    },
    {
      name: "Hospitalization Info",
      href: "",
    },
  ];
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

export default function Hospitalisation() {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Hospitalization Info", "Uploaded Documents"]}
      >
        <HospitalizationFrom action={action} id={id} />
        <HospitalizationUploadTable />
      </HorizaontalTabs>
    </Box>
  );
}
