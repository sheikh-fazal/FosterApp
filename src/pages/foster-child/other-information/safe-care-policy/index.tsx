import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import SafeCarePolicy from "../../../../sections/foster-child/other-information/safe-care-policy/SafeCarePolicy";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "/ Child Info",
    href: "/foster-child",
  },
  {
    name: "Safe Care Policies List",
    href: "/foster-child/ABC",
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
