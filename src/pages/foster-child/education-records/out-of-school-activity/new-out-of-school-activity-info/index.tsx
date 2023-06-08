import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import NewOutSchoolActivityInfo from "@root/sections/foster-child/out-of-school-activity/new-out-of-school-activity-info/NewOutSchoolActivityInfo";

const PAGE_TITLE = "Out of School Activity";

NewChildExclusionInfoPage.getLayout = function getLayout(page: any) {
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
          name: "Out of School Info List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function NewChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["Exclusion info", "Upload Document"]);

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <NewOutSchoolActivityInfo />
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
