import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import EditOutSchoolActivityInfo from "@root/sections/foster-child/education-records/out-of-school-activity/edit-out-of-school-activity-info/EditOutSchoolActivityInfo";
import {
  useGetSchoolActivityDocumentDataQuery,
  useGetSingleSchoolActivityDataQuery,
  usePatchSchoolActivityDataMutation,
  usePostDocumentSchoolActivityMutation,
} from "@root/services/foster-child/education-records/out-of-school-activity/OutOfSchoolActivity";
import { useRouter } from "next/router";
import IsFetching from "@root/components/loaders/IsFetching";
import { enqueueSnackbar } from "notistack";

const PAGE_TITLE = "Out of Shool Activity";

EditChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Info",
          href: "/child-info",
        },
        {
          name: "Out of School Activity Info List ",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function EditChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["Activity info", "Upload Document"]);
  const router = useRouter();
  const fosterChildId: any = router?.query?.fosterChildId;
  const recordID: any = router?.query?.recordId;

  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetSingleSchoolActivityDataQuery(recordID);

    console.log(data);
    
  const [postActivityDocument] = usePostDocumentSchoolActivityMutation();
  const {
    data: documentData,
    idFetching: documentFetching,
    isLoading: documentLoading,
    isSuccess: documentSuccess,
  } = useGetSchoolActivityDocumentDataQuery(fosterChildId);

  const postDocumentData = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "OUT_OF_SCHOOL_ACTIVITY");
    formData.append("recordId", recordID);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);

    try {
      const res = await postActivityDocument({ formData, fosterChildId });
      console.log(res);
    } catch (error) {}
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <EditOutSchoolActivityInfo
              initialValueProps={{
                activityType: data?.data?.activityType,
                comments: data?.data?.comments,
                fromDate: new Date(data?.data?.fromDate),
                outOfDate: new Date(data?.data?.outOfDate),
              }}
              isError={isError}
              isSuccess={isSuccess}
              fosterChildId={fosterChildId}
            />
          </>
        )}

        {documentLoading ? (
          <IsFetching isFetching={documentLoading} />
        ) : (
          <>
            <UploadDocuments
              readOnly={false}
              tableData={documentData?.data?.documents}
              searchParam={() => {}}
              isLoading={documentLoading}
              isFetching={documentFetching}
              column={[
                "documentOriginalName",
                "documentType",
                "documentDate",
                "personUploaded",
                "documentPassword",
              ]}
              isSuccess={documentSuccess}
              modalData={(data: any) => postDocumentData(data)}
            />
          </>
        )}
      </HorizaontalTabs>
    </Page>
  );
}
