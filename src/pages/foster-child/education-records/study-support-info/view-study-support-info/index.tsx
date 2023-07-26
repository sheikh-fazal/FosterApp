import React from "react";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import StudySupportInfoForm from "@root/sections/foster-child/education-records/study-support-info/StudySupportInfoForm";

ViewStudySupportInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewStudySupportInfo() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Study Support Info List",
      href: {
        pathname: "/foster-child/education-records/study-support-info",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Study Support Info",
      href: "",
    },
  ];

  const PAGE_TITLE = "Study Support Info";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs tabsDataArray={["Study Support Info", "Document"]}>
        <StudySupportInfoForm disabled />
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
        />
      </HorizaontalTabs>
    </Box>
  );
}
