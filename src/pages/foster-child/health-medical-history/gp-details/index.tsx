import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import GPDetailsList from "@root/sections/foster-child/health-medical-history/gp-details/GPDetailsList";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Health",
    href: "/foster-child",
  },
  {
    name: "All",
    href: "",
  },
];

const PAGE_TITLE = "GP Details Info List";

// ----------------------------------------------------------------------

GPDetails.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function GPDetails() {
  return (
    <Page title={PAGE_TITLE}>
      <GPDetailsList />
    </Page>
  );
}
