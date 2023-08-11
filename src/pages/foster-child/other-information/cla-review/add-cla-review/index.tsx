import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { ClaReviewForm } from "@root/sections/foster-child/other-information/cla-review/form";
import { usePostClaReviewMutation } from "@root/services/foster-child/other-information/cla-review/claReviewApi";

const PAGE_TITLE = "Add CLA Review";

AddClaReview.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function AddClaReview() {
  const { makePath } = usePath();
  const [postData, { isError, isSuccess }] = usePostClaReviewMutation();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "CLA Review List",
      href: makePath({
        path: "/foster-child/other-information/cla-review",
        skipQueries: ["claReviewId"],
      }),
    },
    {
      name: "CLA Review Details",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"CLA Review"}
      />
      <HorizaontalTabs tabsDataArray={["CLA Review", "Upload Document"]}>
        <ClaReviewForm
          onSubmitHandler={postData}
          message={"Added"}
          isError={isError}
          isSuccess={isSuccess}
          isAdding
        />
        <UploadDocuments
          readOnly={false}
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
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          column={[
            "document",
            "documentType",
            "date",
            "personName",
            "password",
          ]}
          modalData={() => {}}
          onDelete={(data: any) => console.log("Deleting", data)}
          onPageChange={(page: any) => console.log("parent log", page)}
          // currentPage={metaData?.page}
          // totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Page>
  );
}
