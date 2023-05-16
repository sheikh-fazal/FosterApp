import Layout from "@root/layouts";
import ChronologyOfEvents from "@root/sections/carer-info/personal-info/chronology-of-events/ChronologyOfEvents";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Carer Chronology of Events",
    href: "",
  },
];

const PAGE_TITLE = "Chronology of Events";

CarerChronologyOfEvents.getLayout = function getLayout(page: any) {
  return (
    <Layout
      variant="dashboard"
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function CarerChronologyOfEvents() {
  return (
    <>
      <ChronologyOfEvents />
    </>
  );
}
