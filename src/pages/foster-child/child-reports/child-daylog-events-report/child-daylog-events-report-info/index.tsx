import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import AllegationInfoTabs from "@root/sections/foster-child/events-and-notification/allegation/allegation-info/allegation-info-tabs/AllegationInfoTabs";
import ChildDaylogEventsReportInfo from "@root/sections/foster-child/child-reports/child-daylog-events-report/child-daylog-events-report-info/child-daylog-events-report-info/ChildDaylogEventsReportInfo";
import ChildDaylogEventsReportInfoTabs from "@root/sections/foster-child/child-reports/child-daylog-events-report/child-daylog-events-report-info/child-daylog-events-report-info-card/ChildDaylogEventsReportInfoCard";

// ----------------------------------------------------------------------
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Allegation List",
    href: !!query?.fosterChildId
      ? `/foster-child/events-and-notification/allegation?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "Child Report List",
    href: "",
  },
];

const PAGE_TITLE = "DAY LOG EVENTS REPORTS";

// ----------------------------------------------------------------------

AllegationInfoPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AllegationInfoPage() {
  const router = useRouter();
  if (!!!router?.query?.fosterChildId) {
    router.push({
      pathname: "/foster-child-lists",
    });
    return;
  }
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        title={PAGE_TITLE}
        breadcrumbs={BREADCRUMBS(router?.query)}
      />
      <ChildDaylogEventsReportInfoTabs />
      {/* <ChildDaylogEventsReportInfo/> */}
    </Page>
  );
}
