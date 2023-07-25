import React, { Fragment } from "react";
import { useTheme } from "@mui/material";
// layout
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { IndependencePackTable } from "@root/sections/foster-child/education-records/independence-packs";
import IndependenceFormBronze from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-bronze/IndependencePackFormBronze";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@root/components/PageBreadcrumbs";
import IndependencePackFormSilver from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-silver/IndependencePackFormSilver";
import IndependencePackFormGold from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/indpendence-pack-form-gold/IndependencePackFormGold";

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

ViewIndependencePack.getLayout = function getLayout(page: any) {
  // const router = useRouter();
  // const { level } = router.query;
  // Commenting out the hook
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        ...BREADCRUMBS,
        // {
        //   name: '',
        //   href: "",
        // },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function ViewIndependencePack() {
  const theme: any = useTheme();
  const router = useRouter();
  const { level } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      {level == "Bronze" ? (
        <IndependenceFormBronze action="view" disabled level={level} />
      ) : level == "Silver" ? (
        <IndependencePackFormSilver action="view" level={level} />
      ) : (
        <IndependencePackFormGold action="view" level={level} />
      )}
    </Page>
  );
}

// ----------------------------------------------------------------------
