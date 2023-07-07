import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import AllegationForm from "@root/sections/carer-info/personal-info/chronology-of-events/allegation/allegation-form/AllegationForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteDocumentListMutation,
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import { enqueueSnackbar } from "notistack";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Allegation list",
    href: "/carer-info/personal-info/carer-chronology-of-events/",
  },
  {
    name: "Allegation",
    href: "",
  },
];

const PAGE_TITLE = "Allegation";
Allegation.getLayout = function getLayout(page: any) {
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
export default function Allegation() {
  const [params, setParams] = useState("");
  const router: any = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/personal-info/carer-chronology-of-events");
  }

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useUploadDocumentListQuery({ params: params });

  //Car Insurance Upload Modal API
  const [postDocuments] = usePostAllegationDocumentsMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteDocumentListMutation();

  const tableData: any = documentData?.data?.allegation_documents;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = (data: any) => {
    const formData = new FormData();
    formData.append("type", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.chosenFile);
    formData.append("allegationId", id);
    postDocuments(formData);
  };

  const deleteDocument = async (id: any) => {
    deleteDocumentList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return (
    <HorizaontalTabs tabsDataArray={["Allegation", "Uploaded Documents"]}>
      <AllegationForm action={action} id={id} />
      <UploadDocuments
        readOnly={action === "view" ? true : false}
        tableData={tableData}
        isLoading={isDocumentLoading}
        isFetching={isFetching}
        isError={hasDocumentError}
        isSuccess={isSuccess}
        column={[
          "documentName",
          "type",
          "documentDate",
          "uploadBy",
          "password",
        ]}
        searchParam={(searchedText: string) => setParams(searchedText)}
        modalData={(data: any) => documentUploadHandler(data)}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={metaData?.page}
        totalPages={metaData?.pages}
        onDelete={(data: any) => {
          deleteDocument(data.id);
        }}
        disabled={
          !!id && (action === "add" || action === "edit") ? false : true
        }
      />
    </HorizaontalTabs>
  );
}
