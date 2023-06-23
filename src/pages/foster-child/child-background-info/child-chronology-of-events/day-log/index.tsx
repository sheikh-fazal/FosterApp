import Layout from "@root/layouts";
import DayLogForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/day-log/DayLogForm";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useGetChildChronologyOfEventsUploadedDocumentsByIdQuery } from "@root/services/foster-child/child-background-info/child-chronology-of-events/DocumentsAPI";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Chronology of Events",
    href: "/foster-child/child-background-info/child-chronology-of-events",
  },
  {
    name: "Day Log / Journal Entries",
    href: "",
  },
];

const PAGE_TITLE = "Day Log / Journal Entires";
DayLog.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function DayLog() {
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useGetChildChronologyOfEventsUploadedDocumentsByIdQuery();
  console.log("🚀 ~ file: index.tsx:32 ~ DayLog ~ data:", data);

  return (
    <HorizaontalTabs tabsDataArray={["Day Log / Journal Entries", "Documents"]}>
      <DayLogForm />
      <UploadDocuments
        searchParam={(searchedText: string) => console.log("searched Value", searchedText)}
        tableData={data?.data?.foster_child_document?.filter(
          (item: { formName: string }) => item?.formName === "day_log"
        )}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        column={[
          "documentOriginalName",
          "documentType",
          "documentDate",
          "personUploaded",
          "documentPassword",
        ]}
        modalData={() => {}}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={data?.data?.page}
        totalPages={data?.data?.pages}
      />
    </HorizaontalTabs>
  );
}
