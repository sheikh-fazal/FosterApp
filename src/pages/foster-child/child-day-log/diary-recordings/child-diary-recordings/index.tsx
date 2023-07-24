import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { enqueueSnackbar } from "notistack";
import DiaryRecordingsForm from "@root/sections/foster-child/child-day-log/diary-recordings/DiaryRecordingsForm";
import {
  useDeleteDiaryUploadDocumentsMutation,
  useDiaryUploadDocumentListQuery,
  usePostDiaryUploadDocumentsMutation,
} from "@root/services/foster-child/child-day-log/diary-recordings/UploadDocumentsApi";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Diary Recordings List",
    href: "/foster-child-lists",
  },
  {
    name: "Child Diary Recordings",
    href: "",
  },
];

const PAGE_TITLE = "Diary Recordings";
ChildDiaryRecordings.getLayout = function getLayout(page: any) {
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

export default function ChildDiaryRecordings() {
  const [params, setParams] = useState("");
  const router: any = useRouter();
  const { action, id, fosterChildId } = router.query;
  if (!action && !id) {
    router.push({
      pathname: "/foster-child/child-day-log/diary-recordings",
      query: {
        fosterChildId: fosterChildId,
      },
    });
  }
  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useDiaryUploadDocumentListQuery({
    params: {
      diaryRecordingId: id,
      params: params,
    },
  });

  //Car Insurance Upload Modal API
  const [postDocuments] = usePostDiaryUploadDocumentsMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteDiaryUploadDocumentsMutation();

  const tableData: any = documentData?.data?.diary_recordings_documents;
  const metaData: any = documentData?.data?.meta;

  //Handling POST API
  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("type", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.chosenFile);
    try {
      await postDocuments({
        params: {
          diaryRecordingId: id,
        },
        body: formData,
      }).unwrap();
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
    <HorizaontalTabs
      tabsDataArray={["Child Diary Recording", "Upload Documents"]}
    >
      <DiaryRecordingsForm action={action} id={id} />
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
        currentPage={metaData?.page ?? 0}
        totalPages={metaData?.pages ?? 1}
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
