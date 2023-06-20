import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocumentsTable from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-2/upload-documents/UploadDocumentsTable";
import EmploymentReferenceTwoForm from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-2/EmploymentReferenceTwoForm";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Employment Reference 2",
    href: "",
  },
];

const PAGE_TITLE = "Employment Reference 2";
EmployementReference2.getLayout = function getLayout(page: any) {
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

export default function EmployementReference2() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }
  return (
    <HorizaontalTabs
      tabsDataArray={["Employment Reference 2", "Upload Documents"]}
    >
      <EmploymentReferenceTwoForm action={action} id={id} />
      <UploadDocumentsTable />
    </HorizaontalTabs>
  );
}
