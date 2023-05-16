import React from "react";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
//components import
import { Contact } from "@root/sections/enquiry-stage/initial-enquiry/contact";
import { FirstApplicant } from "@root/sections/enquiry-stage/initial-enquiry/first-applicant";
import { OtherDetails } from "@root/sections/enquiry-stage/initial-enquiry/other-details";
import DocumentsInitialEnquiry from "@root/sections/enquiry-stage/initial-enquiry/documents/Documents";

//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { useGetInitialInquiryDataQuery } from "@root/services/carer-info/personal-info/initial-enquiry/initial-inquiry-all";
import { Box } from "@mui/material";
import IsFetching from "@root/components/loaders/IsFetching";
import dayjs from "dayjs";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

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
  const { data, isLoading, isError }: any = useGetInitialInquiryDataQuery({});

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
      <DocumentsInitialEnquiry readOnly={true} />
    </HorizaontalTabs>
  );

  if (isLoading)
    return (
      <Page title={PAGE_TITLE}>
        <Box sx={{ position: "relative" }}>
          <IsFetching isFetching />
          <SkeletonFormdata />
        </Box>
      </Page>
    );
  return <Page title={PAGE_TITLE}>{formEl}</Page>;
}
