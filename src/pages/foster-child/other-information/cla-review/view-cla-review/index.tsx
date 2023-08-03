import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { ClaReviewForm } from "@root/sections/foster-child/other-information/cla-review/form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useRouter } from "next/router";
import { useGetClaReviewIdQuery } from "@root/services/foster-child/other-information/cla-review/claReviewApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE = "View CLA Review";

ViewClaReview.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewClaReview() {
  const { makePath } = usePath();

  const router: any = useRouter();
  const { claReviewId } = router.query;

  const { data, isLoading, isError } = useGetClaReviewIdQuery(claReviewId);

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

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"CLA Review"}
      />

      <HorizaontalTabs tabsDataArray={["CLA Review", "Upload Document"]}>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <ClaReviewForm
            disabled
            initialValueProps={{
              ...data[0],
              dateOfReview: new Date(data[0]?.dateOfReview),
              dueDate: new Date(data[0]?.dueDate),
            }}
          />
        )}
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
