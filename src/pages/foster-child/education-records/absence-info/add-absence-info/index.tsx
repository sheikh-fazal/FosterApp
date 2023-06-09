import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-child/absence-info-form/AbsenceInfoForm";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Absence Info List",
    href: "/foster-child/education-records/absence-info",
  },
  {
    name: "Absence Info",
    href: "",
  },
];

const PAGE_TITLE = "Absence Info";
AbsenceInfoFormLayout.getLayout = function getLayout(page: any) {
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
export default function AbsenceInfoFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/foster-child/education-records/absence-info");
  }
  return (
    <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
      <AbsenceInfoForm action={action} id={id} />
      {/* <UploadedDocumentsTable /> */}
      <UploadDocuments
        readOnly={true}
        searchParam={(searchedText: string) =>
          console.log("searched Value", searchedText)
        }
        tableData={[
          {
            document: "Ash",
            documentType: "pdf",
            date: "10/10/2011",
            personName: "Ashraf",
            password: "Admin",
          },
        ]}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        column={["document", "documentType", "date", "personName", "password"]}
        modalData={(data: any) => {
          console.log("searched Value", data);
        }}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={"1"}
        totalPages={"1"}
      />
    </HorizaontalTabs>
  );
}
