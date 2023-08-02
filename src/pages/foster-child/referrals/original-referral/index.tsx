import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import EditChildExclusionInfo from "@root/sections/foster-child/education-records/child-exclusion-info/edit-child-exclusion-info/EditChildExclusionInfo";
import {
  useDeleteDocumentExclusionInfoRecordMutation,
  useGetChildExclusionDocumentListQuery,
  useGetSingleChildExclusionInfoRecordQuery,
  usePostFosterExclusionDocumentMutation,
} from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";
import { useRouter } from "next/router";
import IsFetching from "@root/components/loaders/IsFetching";
import OrifinalChildReferral from "@root/sections/foster-child/referrals/original-child-referral/OriginalChildReferral";

const PAGE_TITLE = "Original Child Referral";

EditChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Info",
          href: "",
        },
        {
          name: "Original Child Referral",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function EditChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["Personal Details"]);
  
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <OrifinalChildReferral />
      </HorizaontalTabs>
    </Page>
  );
}

