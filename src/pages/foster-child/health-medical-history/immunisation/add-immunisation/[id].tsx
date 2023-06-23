import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ImmunisationFrom from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-form/immunisationFrom";
import ImmunisationUploadTable from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-upload/immunisationUploadTable";
import Page from "@root/components/Page";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useGetImmunisationDetailQuery } from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";
import { immunisationInfoListValue } from "@root/sections/foster-child/health-medical-history/immunisation";
const PAGE_TITLE = "Immunisation";

AddImmunisation.getLayout = function GetLayout(page: any) {
  const router: any = useRouter();
  const { action, id } = router.query;

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

export default function AddImmunisation() {
  const router: any = useRouter();
  let { id } = router.query;
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Immunisations Info", "Uploaded Documents"]}
      >
        <ImmunisationFrom id={id} action="add" />
        <ImmunisationUploadTable />
      </HorizaontalTabs>
    </Box>
  );
}
