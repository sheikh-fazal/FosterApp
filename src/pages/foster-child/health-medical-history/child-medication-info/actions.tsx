import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ChildMedicationInfoForm from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfoForm";
import ChildMedicationInfoUploadTable from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfoUploadTable";
import UploadDocuments from "@root/sections/documents/UploadDocuments";



ChildMedicationInfo.getLayout = function GetLayout(page: any) {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  // Constants

  const PAGE_TITLE = "Child Medication Info";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "/foster-child/health-medical-history/child-medication-info",
    },
    {
      name: "Medication Info ",
      href: "",
    },
    // {
    //   name: "Child Medication Info",
    //   href: "",
    // },
  ];
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

// ----------------------------------------------------------------------

export default function ChildMedicationInfo() {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Medication Info", "Uploaded Documents"]}
      >
        <ChildMedicationInfoForm action={action} id={id} />
        <ChildMedicationInfoUploadTable />
        <UploadDocuments
          readOnly={false}
          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          tableData={[
            {
              document: "Ash",
              documentType: "pdf",
              date: "10/10/2011",
              personName: "Ashraf",
              password: "Admin",
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
          modalData={(data: any) => {
            console.log("searched Value", data);
          }}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={"1"}
          totalPages={"1"}
        />
      </HorizaontalTabs>
    </Box>
  );
}
