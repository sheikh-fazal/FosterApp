import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import StatutoryMedicalTypeInfoTabs from "@root/sections/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type/statutory-medical-type-info/statutory-medical-type-info-tabs/StatutoryMedicalTypeInfoTabs";

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

ClaMedicalInfo.getLayout = function getLayout(page: any) {
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

export default function ClaMedicalInfo() {
  return (
    <Page title={PAGE_TITLE}>
      <StatutoryMedicalTypeInfoTabs />
    </Page>
  );
}
