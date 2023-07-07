import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import GPDetailsList from "@root/sections/foster-child/health-medical-history/gp-details/GPDetailsList";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Health",
    href: !!query?.fosterChildId
      ? `/foster-child?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "All",
    href: "",
  },
];

const PAGE_TITLE = "GP Details Info List";

// ----------------------------------------------------------------------

GPDetails.getLayout = function getLayout(page: any, { query }: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(query)}
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
