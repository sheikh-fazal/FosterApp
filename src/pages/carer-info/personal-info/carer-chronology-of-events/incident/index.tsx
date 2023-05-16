import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import IncFrom from "@root/sections/carer-info/personal-info/chronology-of-events/incident/IncidentFrom";
import UploadedDocuments from "@root/sections/carer-info/personal-info/chronology-of-events/incident/UploadedDocuments";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Incident list",
    href: "/carer-info/personal-info/carer-chronology-of-events/",
  },
  {
    name: "Incident",
    href: "",
  },
];

const PAGE_TITLE = "Incident";
incident.getLayout = function getLayout(page: any) {
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
export default function incident() {
  // -------

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Router: any = useRouter();
  const { action, id } = Router.query;
  if (!action && !id) {
    Router.push("/carer-info/personal-info/carer-chronology-of-events/");
  }

  return (
    <>
      <HorizaontalTabs
        tabsDataArray={
          
         ["Incident", "Uploaded Documents"]

        }
      >
        <IncFrom action={action} id={id} />
        <UploadedDocuments /> 
      </HorizaontalTabs>
    </>
  );
}
