import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import TherapyInfoList from "@root/sections/foster-child/health-medical-history/therapy-info/TherapyInfoList";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "/ Child Info",
    href: "/foster-child",
  },
  {
    name: "Therapy Info List",
    href: "/foster-child/health-medical-history/therapy-info-list",
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
      <TherapyInfoList />
    </Page>
  );
}
