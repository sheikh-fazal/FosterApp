import Layout from "@root/layouts";
import DayLogForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/day-log/DayLogForm";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import OOHReportsForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/ooh-reports/OOHReportsForm";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Chronology of Events",
    href: "/foster-child/child-background-info/child-chronology-of-events",
  },
  {
    name: "OOH Reports",
    href: "",
  },
];

const PAGE_TITLE = "Day Log / Journal Entires";
OHHReports.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function OHHReports() {
  return (
    <HorizaontalTabs tabsDataArray={["OOH Reports", "Documents"]}>
      <OOHReportsForm />
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
