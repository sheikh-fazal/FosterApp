import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import SafeCarePolicy from "@root/sections/foster-child/other-information/safe-care-policy-list/safe-care-policy/SafeCarePolicy";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "/ Safe Care Policies List",
    href: "/foster-child/other-information/safe-care-policy-list",
  },
  {
    name: "Safe Care Policy",
    href: "/foster-child/other-information/safe-care-policy",
  },
];

const PAGE_TITLE = "Safe Care Policy";

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
      <SafeCarePolicy />
    </Page>
  );
}
