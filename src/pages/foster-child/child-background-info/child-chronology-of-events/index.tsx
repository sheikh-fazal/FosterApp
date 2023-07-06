import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import ChildChronologyOfEventsList from "@root/sections/foster-child/child-background-info/child-chronology-of-events/ChildChronologyOfEventsList";
import { useRouter } from "next/router";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child",
  },
  {
    name: "Child Chronology of Events",
    href: "",
  },
];

const PAGE_TITLE = "Child Chronology of Events";
ChildChronologyOfEvents.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function ChildChronologyOfEvents() {
  const router = useRouter();
  const { fosterChildId } = router.query;
  return <ChildChronologyOfEventsList fosterChildId={fosterChildId} />;
}
