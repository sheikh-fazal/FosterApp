import React from "react";

// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SchoolDetailInfoForm from "@root/sections/foster-child/education-records/school-detail-info/SchoolDetailInfoForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { Box } from "@mui/material";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants

// ----------------------------------------------------------------------

AddSchoolDetail.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function AddSchoolDetail() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "School Detail Info List",
      href: {
        pathname: "/foster-child/education-records/school-detail-info",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "School Detail Info",
      href: "",
    },
  ];
  
  const PAGE_TITLE = "School Detail Info";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["School Detail Info", "Upload Document"]}
      >
        <SchoolDetailInfoForm />
        <UploadDocuments
          // readOnly={true}
          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          tableData={{}}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          column={[
            "document",
            "documentType",
            "date",
            "personName",
            "password",
          ]}
          modalData={(data: any) => {
            console.log("searched Value", data);
          }}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={"1"}
          totalPages={"1"}
        />{" "}
      </HorizaontalTabs>
    </Box>
  );
}
