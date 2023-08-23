import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import MissingFormUnKnown from "@root/sections/foster-child/event-and-notification/child-exploitation/child-missing-placement/MissingFormUnknown/MissingFormUnKnown";

const PAGE_TITLE: string = "Child Missing Placement";
const CHILD_MISSING_TABS_DATA: string[] = ["Allegation", "Upload Documents"];
ChildMissingPlacement.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildMissingPlacement() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterChildId;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: "child missing placement",
      href: "/foster-child/child-missing-placement",
    },
  ];

  let formEl = (
    <HorizaontalTabs tabsDataArray={CHILD_MISSING_TABS_DATA}>
      <MissingFormUnKnown />
      <UploadDocuments
        readOnly={true}
        searchParam={(searchedText: string) =>
          console.log("searched Value", searchedText)
        }
        // tableData={tableData}
        tableData={[
          {
            document: "bad.png",
            documentType: "png",
            date: "09/09/2009",
            personName: "My name",
            password: "password123",
          },
        ]}
        // isLoading={isDocumentLoading}
        // isFetching={isFetching}
        // isError={hasDocumentError}
        // isSuccess={isSuccess}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        column={["document", "documentType", "date", "personName", "password"]}
        // modalData={documentUploadHandler}
        modalData={(data: any) => console.log(data)}
        onDelete={(data: any) => console.log("Deleting", data)}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={"1"}
        totalPages={"1"}
        // currentPage={metaData?.page}
        // totalPages={metaData?.pages}
      />
    </HorizaontalTabs>
  );

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {formEl}
    </Page>
  );
}
