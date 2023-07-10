import Layout from "@root/layouts";
import DayLogForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/day-log/DayLogForm";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import OfstedNotificationForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/ofsted-notifications/ofstedNotificationsForm";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Chronology of Events",
    href: "/foster-child/child-background-info/child-chronology-of-events",
  },
  {
    name: "Ofsted Notifications",
    href: "",
  },
];

const PAGE_TITLE = "Ofsted Notifications";
OfstedNotifications.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function OfstedNotifications() {
  return (
    <HorizaontalTabs tabsDataArray={["Ofsted Notifications", "Documents"]}>
      <OfstedNotificationForm />
      <UploadDocuments
        searchParam={(searchedText: string) => console.log("searched Value", searchedText)}
        tableData={[]}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        column={["document", "documentType", "date", "personName", "password"]}
        modalData={() => {}}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={"1"}
        totalPages={"1"}
      />
    </HorizaontalTabs>
  );
}
