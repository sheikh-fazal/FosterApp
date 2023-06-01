import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import EditTrainingProfile from "@root/sections/recruitment/assessment-stage-one/training-verification-form/edit-training-profile/EditTrainingProfile";
import { useRouter } from "next/router";
import {
  useGetSingleTrainingProfileDataQuery,
  useGetTrainingProfileAllDocumentQuery,
  usePatchTrainingProfileApiMutation,
  usePostTrainingProfileDocumentMutation,
} from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import IsFetching from "@root/components/loaders/IsFetching";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

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

export default function AddTraingVerification() {
  const [params, setParams] = useState("");
  const formData = new FormData();

  const router = useRouter();
  const id = Object.keys(router?.query)[0];

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetSingleTrainingProfileDataQuery(id);

  const {
    data: uploadDocuments,
    isLoading: uploadDocumentsIsLoading,
    isError: uploadDocumentsIsError,
    isFetching: uploadDocumentsIsFetching,
  } = useGetTrainingProfileAllDocumentQuery({ id, params });

  console.log(uploadDocuments, "uploaded documents");

  const [postTrainingProfileData] = usePostTrainingProfileDocumentMutation();

  const uploadDocumentsHandler = async (postData: any) => {
    formData.append("documentType", postData.documentType);
    formData.append("date", postData.documentDate);
    formData.append("password", postData.password);
    formData.append("file", postData.chosenFile);

    const updatedData = {
      trainingProfileId: id,
      data: formData,
    };

    try {
      const res: any = await postTrainingProfileData(updatedData).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });

      router.push(
        "/recruitment/assessment-stage-one/training-verification-form"
      );
    } catch (error) {
      console.log(error);
      
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };

  // console.log(data?.data?.expiryDate, "single trining profile");

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={["Training Profile", "Upload Documents"]}>
        {uploadDocumentsIsLoading ? (
          <IsFetching isFetching={uploadDocumentsIsLoading} />
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
              trainingProfileId={id}
              onSubmitHandler={postTrainingProfileData}
              message={"Updated"}
              isError={isError}
              isSuccess={isSuccess}
            />
          </>
        )}

        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <UploadDocuments
              readOnly={false}
              tableData={uploadDocuments?.data?.docs}
              searchParam={
                (searchedText: string) => setParams(searchedText)
                // console.log(searchedText)
              }
              isLoading={uploadDocumentsIsLoading}
              isFetching={uploadDocumentsIsFetching}
              isError={uploadDocumentsIsError}
              column={[
                "documentType",
                "documentType",
                "date",
                "uploadBy",
                "password",
              ]}
              isSuccess={isSuccess}
              modalData={(data: any) => uploadDocumentsHandler(data)}
              onPageChange={(page: any) => console.log(page)}
              currentPage={uploadDocuments?.data?.meta?.page}
              totalPages={uploadDocuments?.data?.meta?.pages}
            />
          </>
        )}
      </HorizaontalTabs>
    </Page>
  );
}
