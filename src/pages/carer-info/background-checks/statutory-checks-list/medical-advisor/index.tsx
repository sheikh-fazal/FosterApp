import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/medical-advisor/UploadDocuments";
import MedicalAdvisorForm from "@root/sections/carer-info/background-checks/statutory-checks-list/medical-advisor/MedicalAdvisorForm";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Medical Advisor",
    href: "",
  },
];

const PAGE_TITLE = "Medical Advisor";
MedicalAdvisor.getLayout = function getLayout(page: any) {
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

export default function MedicalAdvisor() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }

  return (
    <HorizaontalTabs tabsDataArray={["Medical Advisor", "Upload Documents"]}>
      <MedicalAdvisorForm action={action} id={id} />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
