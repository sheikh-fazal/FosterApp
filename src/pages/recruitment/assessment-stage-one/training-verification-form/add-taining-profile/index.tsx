import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import RecruitmentTrainingProfile from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/training-profile/RecruitmentTrainingProfile";
import RecruitmentUploadDocuments from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/upload-documents/RecruitmentUploadDocuments";
import { usePostTrainingProfileApiMutation } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

const PAGE_TITLE = "Recruitment";

AddTraingVerification.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Assessment stage 1",
          href: "/recruitment/assessment-stage-one/training-verification-form",
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

// ["Training Profile", "Upload Documents"]
export default function AddTraingVerification() {
  const [postData, { isError, isSuccess }] =
    usePostTrainingProfileApiMutation();
  const [tabsArr, setTabsArr] = useState(["Training Profile"]);

  const updateTabs = async (data: any) => {
    try {
      

      const res: any = await postData(data).unwrap();

      if (res?.error) return;
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });

      setTabsArr(["Training Profile", "Upload Documents"]);
    } catch (error: any) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <RecruitmentTrainingProfile onSubmitHandler={updateTabs} />
        <RecruitmentUploadDocuments />
      </HorizaontalTabs>
    </Page>
  );
}
