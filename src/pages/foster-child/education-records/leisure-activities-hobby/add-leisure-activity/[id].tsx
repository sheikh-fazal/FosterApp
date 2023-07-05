import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import UploadedDocumentsTable from "@root/sections/foster-child/education-records/leisure-activites-hobby/upload-documents/UploadDocumentsTable";
import LeisureActivitiesForm from "@root/sections/foster-child/education-records/leisure-activites-hobby/leisure-activites-hobby-table/LeisureActivitiesForm";

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
LeisureActivity.getLayout = function getLayout(page: any) {
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
export default function LeisureActivity() {
  const router: any = useRouter();
  let { id } = router.query;
  let [leisureActivityId, setLeisureActivityId] = useState(null);
  return (
    <HorizaontalTabs tabsDataArray={["Leisure Activities", "Upload document"]}>
      <LeisureActivitiesForm
        setLeisureActivityId={setLeisureActivityId}
        id={id}
        action="add"
      />
      <UploadedDocumentsTable
        action="add"
        leisureActivityId={leisureActivityId}
      />
    </HorizaontalTabs>
  );
}
