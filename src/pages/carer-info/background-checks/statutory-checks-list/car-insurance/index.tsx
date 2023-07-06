import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import CarInsuranceForm from "@root/sections/carer-info/background-checks/statutory-checks-list/car-insurance/CarInsuranceForm";
import { useRouter } from "next/router";

import {
  usePostStatutoryUploadDocumentsMutation,
  useStatutoryUploadDocumentListQuery,
} from "@root/services/carer-info/background-checks/statutory-check-list/common-upload-documents/uploadDocumentsApi";
import UploadDocumentsTable from "@root/sections/carer-info/background-checks/statutory-checks-list/car-insurance/upload-documents/UploadDocumentsTable";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Car Insurance",
    href: "",
  },
];

const PAGE_TITLE = "Statutory Check List";
CarInsurance.getLayout = function getLayout(page: any) {
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

export default function CarInsurance() {
  const router = useRouter();
  const { action, id } = router.query;
  const formData = new FormData();
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }
  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useStatutoryUploadDocumentListQuery({});

  const [postDocuments] = usePostStatutoryUploadDocumentsMutation();

  const tableData: any = documentData?.data?.as_statutory_checks_list_document;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = (data: any) => {
    console.log("data", tableData);
    formData.append("formName", "CAR_INSURANCE");
    formData.append("recordId", tableData.id);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.documentPassword);
    formData.append("file", data.chosenFile);
    // postDocuments(formData);
  };

  return (
    <HorizaontalTabs tabsDataArray={["Car Insurance", "Upload Documents"]}>
      <CarInsuranceForm action={action} id={id} />
      {/* <UploadDocuments
        // readOnly={true}
        tableData={tableData}
        isLoading={isDocumentLoading}
        isFetching={isFetching}
        isError={hasDocumentError}
        isSuccess={isSuccess}
        column={[
          "documentOriginalName",
          "documentType",
          "documentDate",
          "personUploaded",
          "documentPassword",
        ]}
        modalData={(data: any) => documentUploadHandler(data)}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={metaData?.page}
        totalPages={metaData?.pages}
      /> */}
      <UploadDocumentsTable />
    </HorizaontalTabs>
  );
}
