import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import RespitePlacementForm from "@root/sections/placement-status/respite-placement-table/respite-placement-form/RespitePlacementForm";
import { useRouter } from "next/router";

const PAGE_TILE = "Child Respite";

AddPlacementForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Respite List",
          href: "/respite-placement",
        },
        {
          name: "Child Respite",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AddPlacementForm() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TILE}>
      <RespitePlacementForm action={action} id={id} />
    </Page>
  );
}
