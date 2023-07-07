import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useState } from "react";
import NewChildExclusionInfo from "@root/sections/foster-child/education-records/child-exclusion-info/new-child-exclusion-info/NewChildExclusionInfo";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

const PAGE_TITLE = "Child Exclusion Info";

NewChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Exclusion Info List",
          href: "/child-info",
        },
        {
          name: "Child Exclusion Info",
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
        <NewChildExclusionInfo />
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
