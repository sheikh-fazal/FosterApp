import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import EmploymentReferenceOneForm from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-1/EmploymentReferenceOneForm";
import { useRouter } from "next/router";
import UploadDocumentsTable from "@root/sections/carer-info/background-checks/statutory-checks-list/employment-reference-1/upload-documents/UploadDocumentsTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Employment Reference 1",
    href: "",
  },
];

const PAGE_TITLE = "Employment Reference 1";
EmployementReference1.getLayout = function getLayout(page: any) {
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

export default function EmployementReference1() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }

  return (
    <HorizaontalTabs
      tabsDataArray={["Employment Reference 1", "Upload Documents"]}
    >
      <EmploymentReferenceOneForm action={action} id={id} />
      <UploadDocumentsTable />
    </HorizaontalTabs>
  );
}
