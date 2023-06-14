import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/reference-2/UploadDocuments";
import ReferenceTwoForm from "@root/sections/carer-info/background-checks/statutory-checks-list/reference-2/ReferenceTwoForm";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "References 2",
    href: "",
  },
];

const PAGE_TITLE = "References 2";
Reference2.getLayout = function getLayout(page: any) {
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

export default function Reference2() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }
  return (
    <HorizaontalTabs tabsDataArray={["References 2", "Upload Documents"]}>
      <ReferenceTwoForm action={action} id={id} />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
