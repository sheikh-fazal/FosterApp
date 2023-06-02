import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import GPDetailsInfoTabs from "@root/sections/foster-child/health-medical-history/gp-details/gp-details-info/gp-details-info-tabs/GPDetailsInfoTabs";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Health Info",
    href: "/foster-child/health-medical-history/therapy-info",
  },
  {
    name: "GP Details Info List",
    href: "#",
  },
];

const PAGE_TITLE = "View GP Details Info List";

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
      <GPDetailsInfoTabs />
    </Page>
  );
}
