import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import ImmunisationTable from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-table/immunisationTable";
import { useRouter } from "next/router";
import { useGetImmunisationListQuery } from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";

// Constants

const PAGE_TITLE = "Immunisation";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Immunisation() {
  const router: any = useRouter();
  const { fosterChildId } = router.query;

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          // name: "Immunisation",
          // href: ``,
        },
        {
          name: "child Info",
          href: `/foster-child?fosterChildId=${fosterChildId}`,
        },
        {
          name: "Immunisation info list",
          href: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      <Box>
        <ImmunisationTable fosterChildId={fosterChildId} />
      </Box>
    </Layout>
  );
}
