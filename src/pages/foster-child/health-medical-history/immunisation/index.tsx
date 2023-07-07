import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import ImmunisationTable from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-table/immunisationTable";
import { useRouter } from "next/router";
import { useGetImmunisationListQuery } from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Immunisation",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "child Info",
    href: "/foster-child",
  },
  {
    name: "Immunisation info list",
    href: "",
  },
];
const PAGE_TITLE = "Immunisation";
// ----------------------------------------------------------------------

Immunisation.getLayout = function getLayout(page: any) {
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

export default function Immunisation() {
  const router: any = useRouter();
  const { fosterChildId } = router.query;

  return (
    <Box>
      <ImmunisationTable fosterChildId={fosterChildId} />
    </Box>
  );
}
