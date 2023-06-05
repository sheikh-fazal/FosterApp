import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import HospitalInfoListFrom from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoListFrom";
import HospitalInfoUpload from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoUpload";

BehaviouralInfo.getLayout = function GetLayout(page: any) {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  // Constants

  const PAGE_TITLE = "Hospital info List";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "Hospital Info",
      href: "/foster-child/health-medical-history/hospital-info-list/",
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

export default function BehaviouralInfo() {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  return (
    <Box>
      <HorizaontalTabs tabsDataArray={["HospitalInfo", "Uploaded Documents"]}>
        <HospitalInfoListFrom action={action} id={id} />
        <HospitalInfoUpload />
      </HorizaontalTabs>
    </Box>
  );
}
