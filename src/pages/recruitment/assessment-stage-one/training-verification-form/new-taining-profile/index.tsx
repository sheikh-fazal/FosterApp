import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import RecruitmentTrainingProfile from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/training-profile/RecruitmentTrainingProfile";
import RecruitmentUploadDocuments from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/upload-documents/RecruitmentUploadDocuments";
import {
  usePatchTrainingProfileApiMutation,
  usePostTrainingProfileApiMutation,
} from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
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
  const [postData] = usePostTrainingProfileApiMutation();
  const [updateData] = usePatchTrainingProfileApiMutation();

  const [tabsArr, setTabsArr] = useState(["Training Profile"]);
  const [formState, setFormState] = useState("add");
  const [profileId, setProfileId] = useState("");

  const updateTabs = async (data: any) => {
    try {
      let res: any = null;
      if (formState === "add") res = await postData(data).unwrap();
      else
        res = await updateData({ trainingProfileId: profileId, data }).unwrap();

      if (res?.error) return;

      console.log("res data", res);

      setFormState("update");
      setProfileId(res.data.id);
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
        <RecruitmentTrainingProfile
          profileId={profileId}
          formState={formState}
          onSubmitHandler={updateTabs}
        />
        <RecruitmentUploadDocuments />
      </HorizaontalTabs>
    </Page>
  );
}
