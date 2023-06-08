import React, { Fragment } from "react";
import { useTheme } from "@mui/material";
// layout
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { IndependencePackTable } from "@root/sections/foster-child/education-records/independence-packs";
import IndependenceForm from "@root/sections/foster-child/education-records/independence-packs/independence-pack-form/IndependencePackForm";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
// Constants
const PAGE_TITLE = "Independence Pack";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "IndependencePack-Life Skill Assessment",
    href: "/child-info",
  },
];

// ----------------------------------------------------------------------

AddIndependencePack.getLayout = function getLayout(page: any) {
  const router = useRouter();
  const { level } = router.query;
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        ...BREADCRUMBS,
        {
          name: level,
          href: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function AddIndependencePack() {
  const theme: any = useTheme();
  const router = useRouter();
  const { level } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <IndependenceForm />
    </Page>
  );
}

// ----------------------------------------------------------------------
