import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import OpticianCheckInfoTabs from "@root/sections/foster-child/health-medical-history/statutory-medical-list/optician-check/optician-check-info/optician-check-info-tabs/OpticianCheckInfoTabs";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "/Health",
    href: "/foster-child/health-medical-history/therapy-info",
  },
  {
    name: "GP Details Info List",
    href: "#",
  },
];

const PAGE_TITLE = "Edit GP Details Info List";

// ----------------------------------------------------------------------

OpticianCheckInfo.getLayout = function getLayout(page: any) {
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

export default function OpticianCheckInfo() {
  return (
    <Page title={PAGE_TITLE}>
      <OpticianCheckInfoTabs />
    </Page>
  );
}
