import React, { useState } from "react";

// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SchoolDetailInfoForm from "@root/sections/foster-child/education-records/school-detail-info/SchoolDetailInfoForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import {
  useDeleteUploadDocumentsSchoolDetailInfoByIdMutation,
  useGetUploadDocumentsSchoolDetailInfoQuery,
  usePostUploadDocumentsSchoolDetailInfoApiMutation,
} from "@root/services/foster-child/education-records/school-detail-info/schoolDetailInfoApi";

// ----------------------------------------------------------------------
// Constants

const PAGE_TITLE = "School Detail Info";
// ----------------------------------------------------------------------

EditSchoolDetail.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function EditSchoolDetail() {
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);
  const formData = new FormData();

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
  };
  const Router: any = useRouter();
  const { fosterChildId, schoolInfoId } = Router.query;
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

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching: isDocumentFetching,
    isError: hasDocumentError,
    isSuccess: isDocumentSuccess,
  } = useGetUploadDocumentsSchoolDetailInfoQuery(params);

  const [postDocs] = usePostUploadDocumentsSchoolDetailInfoApiMutation();
  const [deleteData] = useDeleteUploadDocumentsSchoolDetailInfoByIdMutation();
  const tableData: any = documentData?.data?.documents;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = (data: any) => {
    // formData.append("date", '12/12/2000');
    // formData.append("uploadedBy", "Mughal");
    formData.append("fosterChildId", fosterChildId);
    formData.append("formName", "SCHOOL_DETAIL_INFO");
    formData.append("recordId", schoolInfoId);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);
    postDocs(formData);
  };

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
        tabsDataArray={["School Detail Info", "Upload Document"]}
      >
        <SchoolDetailInfoForm />
        <UploadDocuments
          onDelete={(row: any) => {
            console.log(row.id);
            deleteData(row.id);
          }}
          // readOnly={true}
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
          modalData={documentUploadHandler}
          onPageChange={(page: any) => pageChangeHandler(page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Box>
  );
}
