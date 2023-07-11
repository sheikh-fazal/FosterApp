import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import StatutoryMedicalTypeInfoTabs from "@root/sections/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type/statutory-medical-type-info/statutory-medical-type-info-tabs/StatutoryMedicalTypeInfoTabs";
import { useRouter } from "next/router";
import { headerHeading } from "@root/sections/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type";

// ----------------------------------------------------------------------
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Statutory Medical List",
    href: !!query?.fosterChildId
      ? `/foster-child/health-medical-history/statutory-medical-list?fosterChildId=${query?.fosterChildId}`
      : "/foster-child/health-medical-history/statutory-medical-list",
  },
  {
    name: headerHeading?.[query?.type],
    href: "#",
  },
];

const PAGE_TITLE = "Statutory Medical List";

// ----------------------------------------------------------------------

StatutoryMedicalType.getLayout = function getLayout(page: any) {
  const { query } = useRouter();
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

export default function StatutoryMedicalType() {
  return (
    <Page title={PAGE_TITLE}>
      <StatutoryMedicalTypeInfoTabs />
    </Page>
  );
}
