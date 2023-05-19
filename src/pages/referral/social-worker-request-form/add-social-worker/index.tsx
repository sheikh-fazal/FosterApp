// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
// components
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PersonalInfo from "@root/sections/referral/social-worker-request-form/add/personal-info/PersonalInfo";
import ApprovedDetails from "@root/sections/referral/social-worker-request-form/add/approved-details/ApprovedDetails";
import UploadDocument from "@root/sections/referral/social-worker-request-form/add/social-worker-upload-document/UploadDocument"; 

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Referral",
    href: "/referral",
  },
  {
    name: "Social Worker Request Form",
    href: "",
  },
];

const PAGE_TITLE = "Social Worker Request Form";

// ----------------------------------------------------------------------

AddSocialWorker.getLayout = function getLayout(page: any) {
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

export default function AddSocialWorker() { 

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={[
          "Personal Info",
          "Approved Details",
          "Upload Documents"
        ]}
      >
        <PersonalInfo  message="Added" />
        <ApprovedDetails  message="Added" />
        <UploadDocument/>
      </HorizaontalTabs>
    </Page>
  );
}
