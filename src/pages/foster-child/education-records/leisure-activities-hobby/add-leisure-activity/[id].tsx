import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import UploadedDocumentsTable from "@root/sections/foster-child/education-records/leisure-activites-hobby/upload-documents/UploadDocumentsTable";
import LeisureActivitiesForm from "@root/sections/foster-child/education-records/leisure-activites-hobby/leisure-activites-hobby-table/LeisureActivitiesForm";

// Constants

const PAGE_TITLE = "Leisure Activities";

export default function LeisureActivity() {
  const router: any = useRouter();
  let { id } = router.query;
  let [leisureActivityId, setLeisureActivityId] = useState(null);
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          id: 1,
          icon: <HomeIcon />,
          href: "/",
        },
        {
          id: 2,
          name: "Leisure Activities List",
          href: `/foster-child/education-records/leisure-activities-hobby?fosterChildId=${id}`,
        },
        {
          id: 3,
          name: "Leisure Activity",
          href: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      <HorizaontalTabs
        tabsDataArray={["Leisure Activities", "Upload document"]}
      >
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
    </Layout>
  );
}
