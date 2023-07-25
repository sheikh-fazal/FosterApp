import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import MedicalAppointmentsUploadtable from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsUploadtable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import MedicalAppointmentsFrom from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsFrom";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

MedicalAppointments.getLayout = function getLayout(page: any) {

  return (
   <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>
  );
};

// ----------------------------------------------------------------------

export default function MedicalAppointments() {
  const Router: any = useRouter();
  const { action, medicalAppointmentID,fosterChildId } = Router.query;
  const PAGE_TITLE = "Medical Appointments";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: null,
      href: "",
    },
    {
      name: "Medical Appointments Info ",
      href:  {
        pathname: "/foster-child/health-medical-history/medical-appointments",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Info",
      href: "",
    },
  ];
  return (
    <Box>
     <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Medical Appointments Info", "Uploaded Documents"]}
      >
        <MedicalAppointmentsFrom action={action} medicalAppointmentID={medicalAppointmentID} fosterChildId={fosterChildId} />
        <UploadDocuments
          // readOnly={true}
          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          tableData={{}}
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
