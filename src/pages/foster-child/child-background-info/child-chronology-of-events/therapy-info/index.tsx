import Layout from "@root/layouts";
import DayLogForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/day-log/DayLogForm";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation,
  useGetChildChronologyOfEventsUploadedDocumentsByIdQuery,
  useGetChildChronologyOfEventsUploadedDocumentsListQuery,
  usePostChildChronologyOfEventsUploadedDocumentsMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/DocumentsAPI";
import { useRouter } from "next/router";
import { useDeleteChildChronologyOfEventsDayLogByIdMutation } from "@root/services/foster-child/child-background-info/child-chronology-of-events/DayLogAPI";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import AbsenceInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/absence-info/AbsenceInfoForm";
import ExclusionInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/exclusion-info/ExclusionInfoForm";
import VocationalCourseInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/vocational-course-info/VocationalCourseInfoForm";
import HospitalisationInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/hospitalisation-info/HospitalisationInfoForm";
import TherapyInfoForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/therapy-info/TherapyInfoForm";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Chronology of Events",
    href: "/foster-child/child-background-info/child-chronology-of-events",
  },
  {
    name: "Therapy Info",
    href: "",
  },
];

const PAGE_TITLE = "Therapy Info";
HospitalisationInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function HospitalisationInfo() {
  const router = useRouter();
  const { id, action }: any = router.query;
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useGetChildChronologyOfEventsUploadedDocumentsByIdQuery();
  console.log("🚀 ~ file: index.tsx:41 ~ DayLog ~ data:", data);
  const [deleteUploadedDocument] = useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation();
  const [postUploadedDocument] = usePostChildChronologyOfEventsUploadedDocumentsMutation();
  const deleteDocument = async (queryArg: any) => {
    try {
      await deleteUploadedDocument(queryArg);

      enqueueSnackbar(`Document Delete Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };
  const uploadDocumentsHandler = async (postData: any) => {
    const formData = new FormData();
    formData.append("documentType", postData.documentType);
    formData.append("documentDate", postData.documentDate);
    formData.append("documentPassword", postData.password);
    formData.append("file", postData.chosenFile);
    formData.append("formName", "day_log");
    formData.append("recordId", id);

    // const updatedData = {
    //   trainingProfileId: id,
    //   data: formData,
    // };

    try {
      const res: any = await postUploadedDocument({ addDocumentCcRequestDto: formData }).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      console.log(error);

      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };
  return (
    <HorizaontalTabs tabsDataArray={["Therapy Info", "Documents"]}>
      <TherapyInfoForm />
      <UploadDocuments
        searchParam={(searchedText: string) => console.log("searched Value", searchedText)}
        tableData={data?.data?.foster_child_document?.filter(
          (item: { formName: string }) => item?.formName === "day_log"
        )}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        column={[
          "documentOriginalName",
          "documentType",
          "documentDate",
          "personUploaded",
          "documentPassword",
        ]}
        // onDelete={}
        onDelete={(data: any) => {
          deleteDocument(data.id);
        }}
        modalData={(data: any) => uploadDocumentsHandler(data)}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={data?.data?.page}
        totalPages={data?.data?.pages}
        disabled={!!id && (action === "add" || action === "edit") ? false : true}
      />
    </HorizaontalTabs>
  );
}
