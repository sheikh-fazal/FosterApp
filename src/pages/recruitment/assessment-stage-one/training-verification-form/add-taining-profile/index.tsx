import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import RecruitmentTrainingProfile from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/training-profile/RecruitmentTrainingProfile";
import RecruitmentUploadDocuments from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/upload-documents/RecruitmentUploadDocuments";


const PAGE_TITLE = "Recruitment";

AddTraingVerification.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Assessment stage 1",
          href: "/recruitment",
        },
        {
          name: "Training Profile",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AddTraingVerification() {
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={["Training Profile", "Upload Documents"]}
      >

        <RecruitmentTrainingProfile />
        <RecruitmentUploadDocuments />


      </HorizaontalTabs>
    </Page>
  );
}
