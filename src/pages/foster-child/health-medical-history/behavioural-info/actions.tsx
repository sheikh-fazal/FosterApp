import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import BehavioralInfoForm from "@root/sections/foster-child/health-medical-history/behavioral-info-list/behavioralInfoForm";

BehaviouralInfo.getLayout = function GetLayout(page: any) {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  // Constants

  const PAGE_TITLE = `${
    action.charAt(0).toUpperCase() + action.slice(1)
  } Behavioural Info`;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "child Info",
      href: "/foster-child",
    },
    {
      name: "Behavioural Info list",
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

export default function BehaviouralInfo() {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  return (
    <Box>
      <BehavioralInfoForm action={action} id={id} />
    </Box>
  );
}
