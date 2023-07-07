import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import MedicalAppointmentsUploadtable from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsUploadtable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import MedicalAppointmentsFrom from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsFrom";

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
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "Medical Appointments Info ",
      href: "",
    },
    {
      name: "Medical AppointmentsInfo",
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
        <MedicalAppointmentsUploadtable />
      </HorizaontalTabs>
    </Box>
  );
}
