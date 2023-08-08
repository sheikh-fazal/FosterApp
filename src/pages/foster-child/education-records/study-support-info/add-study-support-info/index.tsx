import { Box } from "@mui/material";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import StudySupportInfoForm from "@root/sections/foster-child/education-records/study-support-info/StudySupportInfoForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useState } from "react";
import { useGetUploadDocumentsStudySupportInfoQuery } from "@root/services/foster-child/education-records/study-support-info/studySupportInfoAPI";

AddStudySupportInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function AddStudySupportInfo() {
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
  };

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

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching: isDocumentFetching,
    isError: hasDocumentError,
    isSuccess: isDocumentSuccess,
  } = useGetUploadDocumentsStudySupportInfoQuery(params);

  const tableData: any = documentData?.data?.documents;
  const metaData: any = documentData?.data?.meta;

  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Study Support Info", "Upload Document"]}
      >
        <StudySupportInfoForm />
        <UploadDocuments
          readOnly={true}
          searchParam={(searchedText: string) => setSearchHandle(searchedText)}
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isDocumentFetching}
          isError={hasDocumentError}
          isSuccess={isDocumentSuccess}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          onPageChange={(page: any) => pageChangeHandler(page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Box>
  );
}
