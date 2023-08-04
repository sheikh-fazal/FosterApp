// import React from "react";

// export default function Incident() {
//   return <div>Incident</div>;
// }
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import ChildMedicationInfotable from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfotable";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import IncidentTable from "@root/sections/foster-child/events-and-notification/incident/IncidentTable";
// import IncidentTable from "@root/sections/foster-child/events-and-notification/incident/incidentTable";
// import IncidentTable from "@root/sections/foster-child/events-and-notification/incident/incidentTable";
// import IncidentTable from "@root/sections/foster-child/events-and-notification/incident/incidentTable";

// Constants

// ----------------------------------------------------------------------

ChildIncidentInfo.getLayout = function getLayout(page: any) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChildIncidentInfo() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Incident List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Incident";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {/* <IncidentTable fosterChildId={fosterChildId} /> */}
      {/* <ChildMedicationInfotable fosterChildId={fosterChildId} /> */}
      <IncidentTable fosterChildId={fosterChildId}/>
    </Box>
  );
}
