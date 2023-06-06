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
    name: "/ Therapy Info List",
    href: "/foster-child/health-medical-history/therapy-info",
  },
  {
    name: "Child Therapy Info",
    href: "#",
  },
];

const PAGE_TITLE = "Therapy Info";

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
