import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import MedicalAdvisorForm from "@root/sections/carer-info/background-checks/statutory-checks-list/medical-advisor/MedicalAdvisorForm";
import MedicalAppointmentsUploadtable from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsUploadtable";

MedicalAppointments.getLayout = function GetLayout(page: any) {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  // Constants

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

export default function MedicalAppointments() {
  const Router: any = useRouter();
  const { action, id } = Router.query;
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Medical Appointments Info", "Uploaded Documents"]}
      >
        <MedicalAdvisorForm action={action} id={id} />
        <MedicalAppointmentsUploadtable />
      </HorizaontalTabs>
    </Box>
  );
}
