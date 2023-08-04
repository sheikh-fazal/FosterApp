import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import EditOutSchoolActivityInfo from "@root/sections/foster-child/education-records/out-of-school-activity/edit-out-of-school-activity-info/EditOutSchoolActivityInfo";
import { useGetSingleSchoolActivityDataQuery } from "@root/services/foster-child/education-records/out-of-school-activity/OutOfSchoolActivity";
import { useRouter } from "next/router";
import IsFetching from "@root/components/loaders/IsFetching";

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
  const fosterChildId = Object.keys(router?.query)[0];

  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetSingleSchoolActivityDataQuery(fosterChildId);

  console.log(data);

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
        <UploadDocuments
          readOnly={false}
          tableData={[]}
          searchParam={() => {}}
          isLoading={false}
          isFetching={false}
          column={[
            "documentType",
            "documentType",
            "date",
            "uploadBy",
            "password",
          ]}
          isSuccess={false}
          modalData={(data: any) => console.log(data)}
        />
      </HorizaontalTabs>
    </Page>
  );
}
