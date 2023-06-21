import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ImmunisationFrom from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-form/immunisationFrom";
import ImmunisationUploadTable from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-upload/immunisationUploadTable";

Hospitalisation.getLayout = function GetLayout(page: any) {
  const router: any = useRouter();
  const { action, id } = router.query;
  console.log(action);

  const PAGE_TITLE = "Immunisation";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "Child Immunisation Info ",
      href: "",
    },
    {
      name: "Immunisation Info",
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
        tabsDataArray={["Immunisations Info", "Uploaded Documents"]}
      >
        <ImmunisationFrom action={action} id={id} />
        <ImmunisationUploadTable />
      </HorizaontalTabs>
    </Box>
  );
}
