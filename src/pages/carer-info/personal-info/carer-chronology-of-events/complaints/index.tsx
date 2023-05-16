import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useRouter } from "next/router";
import ComplaintsForm from "@root/sections/carer-info/personal-info/chronology-of-events/complaints/complaints-forms/ComplaintForms";
import UploadedDocumentsTable from "@root/sections/carer-info/personal-info/chronology-of-events/complaints/upload-documents/UploadDocumentsTable";
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Complaints list",
    href: "/carer-info/personal-info/carer-chronology-of-events/",
  },
  {
    name: "Complaints",
    href: "",
  },
];

const PAGE_TITLE = "Complaints";
Complaints.getLayout = function getLayout(page: any) {
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
export default function Complaints() {
  // -------
  const Router: any = useRouter();
  const { action, id } = Router.query;
  if (!action && !id) {
    Router.push("/carer-info/personal-info/carer-chronology-of-events/");
  }
  return (
    <>
      <HorizaontalTabs tabsDataArray={["Complaints", "Uploaded Documents"]}>
        <ComplaintsForm action={action} id={id} />
        <UploadedDocumentsTable action={action} />
      </HorizaontalTabs>
    </>
  );
}
