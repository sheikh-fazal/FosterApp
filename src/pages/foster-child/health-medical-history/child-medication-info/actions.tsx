import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ChildMedicationInfoForm from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfoForm";
import ChildMedicationInfoUploadTable from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfoUploadTable";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { enqueueSnackbar } from "notistack";
import {
  useCreateChildMedicationInfoDocumentMutation,
  useDeleteChildMedicationInfoDocumentMutation,
  useGetChildMedicationInfoDocumentBYIDQuery,
  useGetChildMedicationInfoDocumentQuery,
  useLazyGetChildMedicationInfoDocumentQuery,
} from "@root/services/foster-child/health-medical-history/child-medication-info/ChildMedicationInfoDocument";
import useAuth from "@root/hooks/useAuth";
import dayjs from "dayjs";

ChildMedicationInfoActions.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ChildMedicationInfoActions() {
  const {
    user: { firstName, defaultRole, lastName },
  }: any = useAuth();

  const Router: any = useRouter();
  const { action, fosterChildId, ChildMedicationInfoId } = Router.query;
  const PAGE_TITLE = "Child Medication Info";
  console.log(Router);
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "Medication Info",
      href: {
        pathname: "/foster-child/health-medical-history/child-medication-info",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Medication Info",
      href: "/foster-child/health-medical-history/child-medication-info/",
    },
  ];

  // export default function CarInsurance() {
  const [params, setParams] = useState("");

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useGetChildMedicationInfoDocumentQuery({
    ChildMedicationInfoId,
  });

  //Car Insurance Upload Modal API
  const [postDocuments] = useCreateChildMedicationInfoDocumentMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteChildMedicationInfoDocumentMutation();

  const tableData: any = documentData?.data;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = (data: any) => {
    const formData = new FormData();
    formData.append("docName", "Child Medication Info");
    formData.append("uploadedBy", firstName);
    formData.append("docType", data.documentType);
    formData.append("date", dayjs(data.documentDate).format("DD/MM/YYYY"));
    formData.append("password", data.password);
    formData.append("docFile", data.chosenFile);
    postDocuments({
      params: {
        childMedicationInfoId: ChildMedicationInfoId,
      },
      body: formData,
    });
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
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <HorizaontalTabs
        tabsDataArray={["Medication Info", "Uploaded Documents"]}
      >
        <ChildMedicationInfoForm
          action={action}
          fosterChildId={fosterChildId}
          ChildMedicationInfoId={ChildMedicationInfoId}
        />
        {/* <ChildMedicationInfoUploadTable /> */}
        <UploadDocuments
          readOnly={action === "view" ? true : false}
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isFetching}
          isError={hasDocumentError}
          isSuccess={isSuccess}
          column={["docName", "date", "docType", "uploadedBy", "password"]}
          searchParam={(searchedText: string) => setParams(searchedText)}
          modalData={(data: any) => documentUploadHandler(data)}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
          onDelete={(data: any) => {
            deleteDocument(data.id);
          }}
        />
      </HorizaontalTabs>
    </Box>
  );
}
