import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import HospitalizationTable from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ComplaintsFrom from "@root/sections/foster-child/events-and-notification/complaints/ComplaintsForm";
import ComplaintsForm from "@root/sections/foster-child/events-and-notification/complaints/ComplaintsForm";
import ComplaintsUploadTable from "@root/sections/foster-child/events-and-notification/complaints/complaintsUploadTable";

ComplaintsActions.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ComplaintsActions() {
  const Router: any = useRouter();
  const { fosterChildId, complaintsId, action } = Router.query;
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Complaints",
      href: "",
    },
    {
      name: "Complaints List",
      href: {
        pathname: "/foster-child/events-and-notification/complaints",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Complaints List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Complaints";
  // ----------------------------------------------------------------------
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <Box>
        <HorizaontalTabs tabsDataArray={["Complaints", "Uploaded Documents"]}>
          <ComplaintsForm
            fosterChildId={fosterChildId}
            complaintsId={complaintsId}
            action={action}
          />
          <ComplaintsUploadTable
            fosterChildId={fosterChildId}
            complaintsId={complaintsId}
            action={action}
          />
        </HorizaontalTabs>
      </Box>
    </Box>
  );
}
