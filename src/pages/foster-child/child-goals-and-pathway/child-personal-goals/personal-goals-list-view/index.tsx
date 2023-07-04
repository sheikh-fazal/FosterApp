import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { ChildPersonalGoalsListView } from "@root/sections/foster-child/child-goals-pathway/child-personal-goals/personal-goals-list-view/ChildPersonalGoalsListView";
import { useRouter } from "next/router";
import { useGetChildPersonalViewDataQuery } from "@root/services/foster-child/child-goals-and-pathway/ChildGoalsAndPathwayApi";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import Error from "@root/components/Error";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Personal Goals List",
    href: "/foster-child/child-goals-and-pathway/child-personal-goals/",
  },
  {
    name: "Personal Goal",
    href: "/",
  },
];

const PAGE_TITLE = "Child Personal Goals";

// PersonalGoalsListView.getLayout = function getLayout(page: any) {
//   <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
//     {page}
//   </Layout>;
// };

export default function PersonalGoalsListView() {
  // const router = useRouter();
  // const { id, childId } = router.query;

  // const { data, isLoading, isError }: any = useGetChildPersonalViewDataQuery({
  //   id: id,
  //   fosterChildId: childId,
  // });
  // console.log(data);

  // if (isError) return <Error />;

  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      <Page title={PAGE_TITLE}>
        {/* {isLoading ? (
        <SkeletonFormdata />
      ) : ( */}
        <ChildPersonalGoalsListView 
        disabled 
        // initialValueProps={data?.[0]}
         />
        {/* )} */}
      </Page>
    </Layout>
  );
}
