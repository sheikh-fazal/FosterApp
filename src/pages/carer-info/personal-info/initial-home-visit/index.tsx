import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import InitialHomeVisitTab from "@root/sections/carer-info/personal-info/initial-home-visit/initial-home-visit-tab/InitialHomeVisitTab";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    // href: "/carer-info",
    href: !!query?.fosterCarerId
      ? `/carer-info?fosterCarerId=${query?.fosterCarerId}`
      : "/carer-info",
  },
  {
    name: "Initial Home Visit",
    href: "",
  },
];

const PAGE_TITLE = "Initial Home Visit";

// ----------------------------------------------------------------------

InitialHomeVisit.getLayout = function getLayout(page: any, { query }: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(query)}
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
      <InitialHomeVisitTab />
    </Page>
  );
}
