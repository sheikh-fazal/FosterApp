import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import MissingFormUnKnown from "@root/sections/foster-child/event-and-notification/child-exploitation/child-missing-placement/MissingFormUnknown/MissingFormUnKnown";
import {
  useDeleteChildMissingPlacementDocsMutation,
  useGetChildMissingPlacementDocsQuery,
  usePostChildMissingPlacementUnKnownMutation,
} from "@root/services/foster-child/events-and-notification/childMissingReportApi";
import { enqueueSnackbar } from "notistack";

const PAGE_TITLE: string = "Child Missing Placement";
const CHILD_MISSING_TABS_DATA: string[] = ["Allegation", "Upload Documents"];
ChildMissingPlacement.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildMissingPlacement() {
  const docsData = new FormData();
  const { makePath } = usePath();
  const router = useRouter();
  const id: any = router?.query?.fosterChildId;

  const [params, setParams] = useState({
    limit: "10",
    offset: "0",
    search: undefined,
    fosterChildId: id,
    formName: "unknown_missing-placement",
  });

  const {
    data: tableData,
    isLoading: isDocumentLoading,
    isFetching,
    isSuccess,
    isError: hasDocumentError,
  } = useGetChildMissingPlacementDocsQuery(params);

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

  const [postUnKnownMissingPlacement] =
    usePostChildMissingPlacementUnKnownMutation();

  const [deleteDocs] = useDeleteChildMissingPlacementDocsMutation();

  const documentUploadHandler = (data: any) => {
    docsData.append("formName", "UNKNOWN_MISSING_PLACEMENT");
    docsData.append("documentType", data.documentType);
    docsData.append("documentDate", data.documentDate);
    docsData.append("documentPassword", data.password);
    docsData.append("file", data.chosenFile);
    docsData.append("fosterChildId", id);
    // postDocuments(docsData);
  };
  const missingFormSubmitHandler = async (data: any) => {
    try {
      const res: any = await postUnKnownMissingPlacement({
        data,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/personal-info/initial-enquiry?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  let formEl = (
    <HorizontalTabs tabsDataArray={CHILD_MISSING_TABS_DATA}>
      <MissingFormUnKnown
        onSubmit={missingFormSubmitHandler}
        prevPath={`/foster-child?fosterChildId=${id}`}
      />
      <UploadDocuments
        // readOnly={true}
        searchParam={(searchedText: string) =>
          console.log("searched Value", searchedText)
        }
        tableData={tableData?.data?.missing_placement_documents}
        // tableData={[
        //   {
        //     document: "bad.png",
        //     documentType: "png",
        //     date: "09/09/2009",
        //     personName: "My name",
        //     password: "password123",
        //   },
        // ]}
        isLoading={isDocumentLoading}
        isFetching={isFetching}
        isError={hasDocumentError}
        isSuccess={isSuccess}
        // isLoading={false}
        // isFetching={false}
        // isError={false}
        // isSuccess={true}
        column={[
          "file",
          "documentType",
          "documentDate",
          "personUploaded",
          "documentPassword",
        ]}
        modalData={documentUploadHandler}
        // modalData={(data: any) => console.log(data)}
        onDelete={(data: any) => console.log("Deleting", data)}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={"1"}
        totalPages={"1"}
        // currentPage={metaData?.page}
        // totalPages={metaData?.pages}
      />
    </HorizontalTabs>
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
