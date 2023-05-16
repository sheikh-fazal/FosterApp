import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadedDocumentsTable from "@root/sections/carer-info/personal-info/chronology-of-events/allegation/upload-documents/UploadDocumentsTable";
import { useRouter } from "next/router";
import AllegationForm from "@root/sections/carer-info/personal-info/chronology-of-events/allegation/allegation-form/AllegationForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Allegation list",
    href: "/carer-info/personal-info/carer-chronology-of-events/",
  },
  {
    name: "Allegation",
    href: "",
  },
];

const PAGE_TITLE = "Allegation";
Allegation.getLayout = function getLayout(page: any) {
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
export default function Allegation() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/personal-info/carer-chronology-of-events");
  }
  return (
    <HorizaontalTabs tabsDataArray={["Allegation", "Uploaded Documents"]}>
      <AllegationForm action={action} id={id} />
      <UploadedDocumentsTable />
    </HorizaontalTabs>
  );
}
