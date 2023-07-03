import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocumentsTable from "@root/sections/carer-info/background-checks/statutory-checks-list/reference-3/upload-documents/UploadDocumentsTable";
import ReferenceThreeForm from "@root/sections/carer-info/background-checks/statutory-checks-list/reference-3/ReferenceThreeForm";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "References 3",
    href: "",
  },
];

const PAGE_TITLE = "References 3";
Reference3.getLayout = function getLayout(page: any) {
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

export default function Reference3() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }
  return (
    <HorizaontalTabs tabsDataArray={["References 3", "Upload Documents"]}>
      <ReferenceThreeForm action={action} id={id} />
      <UploadDocumentsTable />
    </HorizaontalTabs>
  );
}
