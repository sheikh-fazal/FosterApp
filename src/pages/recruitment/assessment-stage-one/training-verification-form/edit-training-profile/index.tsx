import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import RecruitmentTrainingProfile from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/training-profile/RecruitmentTrainingProfile";
import RecruitmentUploadDocuments from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/upload-documents/RecruitmentUploadDocuments";
import EditTrainingProfile from "@root/sections/recruitment/assessment-stage-one/training-verification-form/edit-training-profile/EditTrainingProfile";
import { useRouter } from "next/router";
import { useGetSingleTrainingProfileDataQuery } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import IsFetching from "@root/components/loaders/IsFetching";
import dayjs from "dayjs";

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
  const router = useRouter();
  const id = Object.keys(router?.query)[0];

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetSingleTrainingProfileDataQuery(id);

  // console.log(data?.data?.expiryDate, "single trining profile");

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={["Training Profile", "Upload Documents"]}>
        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <EditTrainingProfile
              initialValueProps={{
                carerName: data?.data?.carerName,
                courseAttended: data?.data?.courseAttended,
                courseStatus: data?.data?.courseStatus,
                comments: data?.data?.comments,
                trainingNeeds: data?.data?.trainingNeeds,
                otherTraining: data?.data?.otherTraining,
                addtionalInfo: data?.data?.addtionalInfo,
                attendance: data?.data?.attendance,
                expiryDate: new Date(data?.data?.expiryDate),
                date: new Date(data?.data?.date),
              }}
              //   onSubmitHandler={updateData}
              message={"Updated"}
              isError={isError}
              isSuccess={isSuccess}
            />
          </>
        )}
        <RecruitmentUploadDocuments />
      </HorizaontalTabs>
    </Page>
  );
}
