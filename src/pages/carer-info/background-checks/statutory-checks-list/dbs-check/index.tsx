import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import DbsCheckForm from "@root/sections/carer-info/background-checks/statutory-checks-list/dbs-check/DbsCheckForm";
import UploadedDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/dbs-check/upload-documents/UploadDocumentsTable";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Dbs Check",
    href: "",
  },
];

const PAGE_TITLE = "Statutory Check List";
DbsCheck.getLayout = function getLayout(page: any) {
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

export default function DbsCheck() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }

  return (
    <HorizaontalTabs tabsDataArray={["DBS Check", "Upload Documents"]}>
      <DbsCheckForm action={action} id={id} />
      <UploadedDocuments />
    </HorizaontalTabs>
  );
}
