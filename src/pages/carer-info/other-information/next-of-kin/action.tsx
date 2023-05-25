import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import NextOfKinForm from "@root/sections/carer-info/other-information/next-of-kin/nextOfKinForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Next of Kin",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "Carer Info",
    href: "/carer-info/",
  },
  {
    name: "All",
    href: "",
  },
];
const PAGE_TITLE = "Next of Kin";
// ----------------------------------------------------------------------

NextOfKinAction.getLayout = function getLayout(page: any) {
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

export default function NextOfKinAction() {
  return (
    <Box>
      <NextOfKinForm />
    </Box>
  );
}
