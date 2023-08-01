import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import HospitalizationTable from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

ChildsActivityDirectory.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ChildsActivityDirectory() {
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child’s Activity Directory",
      href: "/carer-info",
    },
    {
      name: "child Info",
      href: "",
    },
    
  ];
  const PAGE_TITLE = "Child’s Activity Directory";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
     
    </Box>
  );;
}
