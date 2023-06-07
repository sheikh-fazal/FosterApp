import React from "react";
// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { SchoolDetailInfoTable } from "@root/sections/foster-child/education-records/school-detail-info";
import { Card } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SchoolDetailInfoForm from "@root/sections/foster-child/education-records/school-detail-info/SchoolDetailInfoForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments"

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "School Detail Info List",
    href: "/foster-child/education-records/school-detail-info",
  },
  {
    name: "School Detail Info",
    href: "",
  },
];

const PAGE_TITLE = "School Detail Info";
// ----------------------------------------------------------------------

ViewSchoolDetail.getLayout = function getLayout(page: any) {
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

export default function ViewSchoolDetail() {
  return (
    <HorizaontalTabs tabsDataArray={["School Detail Info", "Document"]}>
    <SchoolDetailInfoForm disabled/>
    <UploadDocuments
        readOnly={true}
        searchParam={(searchedText: string) =>
          console.log("searched Value", searchedText)
        }
        tableData={{}}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        column={["document", "documentType", "date", "personName", "password"]}
        modalData={(data:any)=>{console.log("searched Value", data)}}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={'1'}
        totalPages={'1'}
      />
  </HorizaontalTabs>
  );
}
