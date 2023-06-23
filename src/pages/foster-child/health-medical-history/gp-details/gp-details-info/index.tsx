import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import GPDetailsInfoTabs from "@root/sections/foster-child/health-medical-history/gp-details/gp-details-info/gp-details-info-tabs/GPDetailsInfoTabs";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Health",
    href: "/foster-child",
  },
  {
    name: "GP Details Info",
    href: "",
  },
];

const PAGE_TITLE = (action: any = "") =>
  `${action?.[0]?.toUpperCase() ?? ""}${action?.slice?.(
    1
  )} GP Details Info List`;

// ----------------------------------------------------------------------

GPDetailsInfo.getLayout = function getLayout(page: any) {
  const { query } = useRouter();
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE?.(query?.action)}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function GPDetailsInfo() {
  const { query } = useRouter();
  return (
    <Page title={PAGE_TITLE?.(query?.action)}>
      <GPDetailsInfoTabs />
    </Page>
  );
}
