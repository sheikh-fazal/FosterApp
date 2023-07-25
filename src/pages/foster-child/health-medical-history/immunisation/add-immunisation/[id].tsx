import Layout from "@root/layouts";
import React, { useState } from "react";
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

// ----------------------------------------------------------------------

export default function AddImmunisation() {
  const router: any = useRouter();
  let { id } = router.query;
  let [immunisationId, setImmunisationId] = useState(null);
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          // name: "",
          href: `/`,
        },
        {
          name: "Child Immunisation Info",
          href: `/foster-child/health-medical-history/immunisation?fosterChildId=${id}`,
        },
        {
          name: "Immunisation info",
          href: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      <Box>
        <HorizaontalTabs
          tabsDataArray={["Immunisations Info", "Uploaded Documents"]}
        >
          <ImmunisationFrom
            setImmunisationId={setImmunisationId}
            id={id}
            action="add"
          />
          <ImmunisationUploadTable immunisationId={immunisationId} />
        </HorizaontalTabs>
      </Box>
    </Layout>
  );
}
