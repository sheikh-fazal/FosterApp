import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import GPDetailsInfoTabs from "@root/sections/foster-child/health-medical-history/gp-details/gp-details-info/gp-details-info-tabs/GPDetailsInfoTabs";
import { NextRouter, useRouter } from "next/router";

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
    name: "GP Details Info",
    href: "",
  },
];

const PAGE_TITLE = (action: any = "") =>
  `${action?.[0]?.toUpperCase() ?? ""}${action?.slice?.(
    1
  )} GP Details Info List`;

// ----------------------------------------------------------------------

GPDetailsInfo.getLayout = function getLayout(page: any, { query }: NextRouter) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(query)}
      title={PAGE_TITLE(query?.action)}
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
    <Page title={PAGE_TITLE(query?.action)}>
      <GPDetailsInfoTabs />
    </Page>
  );
}
