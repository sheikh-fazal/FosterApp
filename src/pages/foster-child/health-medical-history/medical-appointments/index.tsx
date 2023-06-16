import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import MedicalAppointmentsTable from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Medical Appointments",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "child Info",
    href: "/foster-child",
  },
  {
    name: "Medical Appointments info list",
    href: "",
  },
];
const PAGE_TITLE = "Medical Appointments";
// ----------------------------------------------------------------------

MedicalAppointments.getLayout = function getLayout(page: any) {
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
  return (
    <Box>
      <MedicalAppointmentsTable />
    </Box>
  );
}
