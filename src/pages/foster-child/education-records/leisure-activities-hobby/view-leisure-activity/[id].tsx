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
import dayjs from "dayjs";

// Constants

const PAGE_TITLE = "Leisure Activities";

export default function LeisureActivity() {
  const router: any = useRouter();
  const { id, fosterChildId } = router.query;

  const { data, isLoading, isError }: any = useGetLeisureActivityDetailQuery({
    id,
  });
  let { $d }: any = dayjs(data?.data?.time, "HH:mm:ss");

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          href: "/",
        },
        {
          name: "Leisure Activities List",
          href: `/foster-child/education-records/leisure-activities-hobby?fosterChildId=${fosterChildId}`,
        },
        {
          name: "Leisure Activity",
          href: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <HorizaontalTabs
          tabsDataArray={["Leisure Activities", "Upload document"]}
        >
          <LeisureActivitiesForm
            LeisureAcitivityData={{
              ...LeisureActivityDefaultValues,
              ...(data?.data && {
                ...data?.data,
                date: new Date(data?.data?.date),
                time: $d,
              }),
            }}
            action="view"
            id={id}
          />
          <UploadedDocumentsTable action="view" leisureActivityId={id} />
        </HorizaontalTabs>
      )}
    </Layout>
  );
}
