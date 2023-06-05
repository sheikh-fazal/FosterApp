import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info/substitute-cares/backup-carer/details",
  },
  {
    name: "Backup Carer",
    href: "/carer-info/personal-info/initial-enquiry/details",
  },
];

const PAGE_TITLE = "Backup Carer";

export const TABSDATA = ["Backup Carer", "Upload Documents"];

BackupCarer.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function BackupCarer() {
  return (
    <HorizaontalTabs tabsDataArray={TABSDATA}>
      {/* <SubstituteCarerForm /> */}
      <p>testiung</p>

      <UploadDocuments
        searchParam={(searchedText: string) =>
          console.log("searched Value", searchedText)
        }
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
