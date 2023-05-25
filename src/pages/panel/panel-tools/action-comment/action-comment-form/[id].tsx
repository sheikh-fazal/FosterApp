import React from "react";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home"; 
import PanelActionsForm from "@root/sections/panel/panel-tools/panel-actions-comments/panel-actions-form/PanelActionsForm";

// ==============================================================================================================

const PAGE_TILE = "View Panel Actions/Comments";

Agenda.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Panel",
          href: "/panel/panel-tools/action-comment",
        },
        {
          name: "Panel Actions/Comments",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Agenda() {
  const { query } = useRouter();

  let disabled = query.action === "view" ? true : false;

  return (
    <Page title={PAGE_TILE}>
      <PanelActionsForm disabled={disabled} /> 
    </Page>
  );
}
