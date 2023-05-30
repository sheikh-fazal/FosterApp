import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import CarInsuranceForm from "@root/sections/carer-info/background-checks/statutory-checks-list/car-insurance/CarInsuranceForm";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/carer-info/background-checks/statutory-checks-list/car-insurance/UploadDocuments";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Statutory Check List",
    href: "/carer-info/background-checks/statutory-checks-list",
  },
  {
    name: "Car Insurance",
    href: "",
  },
];

const PAGE_TITLE = "Statutory Check List";
CarInsurance.getLayout = function getLayout(page: any) {
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

export default function CarInsurance() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/carer-info/background-checks/statutory-checks-list");
  }

  return (
    <HorizaontalTabs tabsDataArray={["Car Insurance", "Upload Documents"]}>
      <CarInsuranceForm action={action} id={id} />
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
