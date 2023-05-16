// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import CarerFamilySupportNetworkTable from "@root/sections/carer-info/personal-info/carer-family-support-network/CarerFamilySupportNetworkTable";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Member Details",
    href: "",
  },
];

const PAGE_TITLE = "Family Support Network";
// ----------------------------------------------------------------------

CarerFamilySupportNetwork.getLayout = function getLayout(page: any) {
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

export default function CarerFamilySupportNetwork() {
  return (
    <Page title={PAGE_TITLE}>
      <CarerFamilySupportNetworkTable />
    </Page>
  );
}
