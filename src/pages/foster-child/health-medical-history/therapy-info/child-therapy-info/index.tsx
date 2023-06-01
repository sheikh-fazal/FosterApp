import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import ChildTherapyInfoTabs from "@root/sections/foster-child/health-medical-history/therapy-info/child-therapy-info/child-therapy-info-tabs/ChildTherapyInfoTabs";

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

const PAGE_TITLE = "Initial Home Visit";

// ----------------------------------------------------------------------

InitialHomeVisit.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function InitialHomeVisit() {
  return (
    <Page title={PAGE_TITLE}>
      <ChildTherapyInfoTabs />
    </Page>
  );
}
