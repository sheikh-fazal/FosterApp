import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { OhDetails } from "@root/sections/carer-info/personal-info/chronology-of-events/ooh-report/ooh-report-form";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { enqueueSnackbar } from "notistack";
import {
  usePostReportDocumentsMutation,
  useUploadDocumentListQuery,
  useDeleteDocumentListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/ooh-report-api/reportDocumentsApi";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "OOH Report List",
    href: "/carer-info/personal-info/carer-chronology-of-events",
  },
  {
    name: "OOH Report",
    href: "",
  },
];

const PAGE_TITLE = "OOH Report";
oohReport.getLayout = function getLayout(page: any) {
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
export default function oohReport() {
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
  }: any = useUploadDocumentListQuery({
    params: {
      recordId: id,
      params: params,
    },
  });

  //Car Insurance Upload Modal API
  const [postDocuments] = usePostReportDocumentsMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteDocumentListMutation();

  const tableData: any = documentData?.data?.carer_chronology_document;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "OOH_REPORT");
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);
    formData.append("recordId", id);
    try {
      await postDocuments(formData).unwrap();
      enqueueSnackbar("Document Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
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
    <HorizaontalTabs tabsDataArray={["OOH Details", "Upload Documents"]}>
      {/* Oh Details Component */}
      <OhDetails id={id} action={action} />
      {/* Upload Documents Component */}
      <UploadDocuments
        readOnly={action === "view" ? true : false}
        tableData={tableData}
        isLoading={isDocumentLoading}
        isFetching={isFetching}
        isError={hasDocumentError}
        isSuccess={isSuccess}
        column={[
          "formName",
          "documentType",
          "documentDate",
          "personUploaded",
          "documentPassword",
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
