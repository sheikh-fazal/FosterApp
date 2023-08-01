import React, { Fragment } from "react";
import { useTheme } from "@mui/material";
// layout
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { IndependencePackTable } from "@root/sections/foster-child/education-records/independence-packs";
import { defaultValues as bronzeDefaultValues } from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-bronze/index";

import IndependenceFormBronze from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-bronze/IndependencePackFormBronze";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@root/components/PageBreadcrumbs";
import IndependencePackFormSilver from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/independence-pack-form-silver/IndependencePackFormSilver";
import IndependencePackFormGold from "@root/sections/foster-child/education-records/independence-packs/independence-pack-forms/indpendence-pack-form-gold/IndependencePackFormGold";
import { useGetIndependencePackQuery } from "@root/services/foster-child/education-records/independence-packs/IndependencePacks";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

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

EditIndependencePack.getLayout = function getLayout(page: any) {
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

export default function EditIndependencePack() {
  const theme: any = useTheme();
  const router = useRouter();
  const { level, id } = router.query;
  const { data, isLoading, isError } = useGetIndependencePackQuery({
    id,
  });
  if (isLoading) {
    return <SkeletonFormdata />;
  }

  return (
    <Page title={PAGE_TITLE}>
      {level == "Bronze" ? (
        <IndependenceFormBronze
          inedependencePackData={{
            ...bronzeDefaultValues,
            ...(data?.data && {
              ...data?.data,
              assessmentDate: new Date(data?.data?.assessmentDate),
              fromDate: new Date(data?.data?.fromDate),
              toDate: new Date(data?.data?.toDate),
            }),
          }}
          action="edit"
          level={level}
        />
      ) : level == "Silver" ? (
        <IndependencePackFormSilver
          inedependencePackData={{
            ...bronzeDefaultValues,
            ...(data?.data && {
              ...data?.data,
              assessmentDate: new Date(data?.data?.assessmentDate),
              fromDate: new Date(data?.data?.fromDate),
              toDate: new Date(data?.data?.toDate),
            }),
          }}
          action="edit"
          level={level}
        />
      ) : (
        <IndependencePackFormGold
          inedependencePackData={{
            ...bronzeDefaultValues,
            ...(data?.data && {
              ...data?.data,
              assessmentDate: new Date(data?.data?.assessmentDate),
              fromDate: new Date(data?.data?.fromDate),
              toDate: new Date(data?.data?.toDate),
            }),
          }}
          action="edit"
          level={level}
        />
      )}
    </Page>
  );
}

// ----------------------------------------------------------------------
