import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import UploadedDocumentsTable from "@root/sections/foster-child/education-records/leisure-activites-hobby/upload-documents/UploadDocumentsTable";
import LeisureActivitiesForm from "@root/sections/foster-child/education-records/leisure-activites-hobby/leisure-activites-hobby-table/LeisureActivitiesForm";
import { useGetLeisureActivityDetailQuery } from "@root/services/foster-child/education-records/leisure-activities-hobby/LeisureActivitiesHobby";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import Page from "@root/components/Page";
import { LeisureActivityDefaultValues } from "@root/sections/foster-child/education-records/leisure-activites-hobby/leisure-activites-hobby-table";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Leisure Activities List",
    href: "/foster-child/education-records/leisure-activities-hobby",
  },
  {
    name: "Leisure Activity",
    href: "",
  },
];

const PAGE_TITLE = "Leisure Activities";
EditLeisureActivity.getLayout = function getLayout(page: any) {
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
export default function EditLeisureActivity() {
  const router: any = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError }: any = useGetLeisureActivityDetailQuery({
    id,
  });
  if (isLoading) {
    return (
      <Page title={PAGE_TITLE}>
        <SkeletonFormdata />
      </Page>
    );
  }
  return (
    <HorizaontalTabs tabsDataArray={["Leisure Activities", "Upload document"]}>
      <LeisureActivitiesForm
        LeisureAcitivityData={{
          ...LeisureActivityDefaultValues,
          ...(data?.data && {
            ...data?.data,
            date: new Date(data?.data?.date),
            time: new Date(data.data.time),
          }),
        }}
        action="edit"
        id={id}
      />
      <UploadedDocumentsTable />
    </HorizaontalTabs>
  );
}
