import React from "react";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
//components import
import { Contact } from "@root/sections/enquiry-stage/initial-enquiry/contact";
import { FirstApplicant } from "@root/sections/enquiry-stage/initial-enquiry/first-applicant";
import { OtherDetails } from "@root/sections/enquiry-stage/initial-enquiry/other-details";

//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import {
  useGetInitialInquiryDataQuery,
  useGetInitialInquiryDocumentsDataQuery,
} from "@root/services/carer-info/personal-info/initial-enquiry/initial-inquiry-all";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useUploadDocumentsMutation } from "@root/services/carer-info/personal-info/initial-enquiry/documentsApi";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Initial Enquiry",
    href: "/carer-info/personal-info/initial-enquiry",
  },
];

const PAGE_TITLE = "Initial Enquiry";

export const INITIALENQUIRYDATA = [
  "First Applicant",
  "Contact",
  "Other Details",
  "Documents",
];

// ----------------------------------------------------------------------

InitialEnquiry.getLayout = function getLayout(page: any) {
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

export default function InitialEnquiry() {
  const formData = new FormData();

  const { data, isLoading, isError }: any = useGetInitialInquiryDataQuery({});

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useGetInitialInquiryDocumentsDataQuery({});

  const [postDocuments] = useUploadDocumentsMutation();

  const documentUploadHandler = (data: any) => {
    formData.append("documentType", data.documentType);
    formData.append("date", data.documentDate);
    formData.append("password", data.password);
    formData.append("document", data.chosenFile);
    postDocuments(formData);
  };

  const tableData: any = documentData?.data?.documents;
  const metaData: any = documentData?.data?.meta;

  //---------------------// uncovering Data //-------------------------------//

  const firstApplicantSubmitHandler = (data: any) => {
    console.log(data, "from parent");
  };

  const formEl = (
    <HorizaontalTabs tabsDataArray={INITIALENQUIRYDATA}>
      {/*---------------------- First Tab---------------------- */}
      <FirstApplicant
        disabled={true}
        isLoading={isLoading}
        isError={isError}
        onSubmit={firstApplicantSubmitHandler}
        data={{
          ...data?.firstApplicant,
          dateOfEnquiry: new Date(dayjs().format("MM/DD/YYYY")),
          dateOfBirth: new Date(
            dayjs(data?.firstApplicant?.dateOfBirth).format("MM/DD/YYYY")
          ),
          image: { name: data?.firstApplicant?.image },
        }}
      />

      {/*---------------------- Second Tab---------------------- */}
      <Contact disabled={true} data={data?.contact} isError={isError} />

      {/*---------------------- Third Tab---------------------- */}
      <OtherDetails
        disabled={true}
        data={data?.otherDetails}
        isError={isError}
      />

      {/*---------------------- Fourth Tab---------------------- */}
      <UploadDocuments
        // readOnly={true}
        searchParam={(searchedText: string) =>
          console.log("searched Value", searchedText)
        }
        tableData={tableData}
        isLoading={isDocumentLoading}
        isFetching={isFetching}
        isError={hasDocumentError}
        isSuccess={isSuccess}
        column={["document", "documentType", "date", "personName", "password"]}
        modalData={documentUploadHandler}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={metaData?.page}
        totalPages={metaData?.pages}
      />
    </HorizaontalTabs>
  );

  if (isLoading)
    return (
      <Page title={PAGE_TITLE}>
        <Box sx={{ position: "relative" }}>
          <SkeletonFormdata />
        </Box>
      </Page>
    );
  return <Page title={PAGE_TITLE}>{formEl}</Page>;
}
