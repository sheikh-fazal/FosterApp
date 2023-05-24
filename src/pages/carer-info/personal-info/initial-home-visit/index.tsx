import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import InitialHomeVisitTab from "@root/sections/carer-info/personal-info/initial-home-visit/initial-home-visit-tab/InitialHomeVisitTab";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Initial Home Visit",
    href: "/carer-info/personal-info/initial-home-visit",
  },
];

// const PAGE_TITLE = "Initial Home Visit";
// const PAGE_TITLE = "React App";

// ----------------------------------------------------------------------

InitialHomeVisit.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      // title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function InitialHomeVisit() {
  return <InitialHomeVisitTab />;
}
