import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-form/AbsenceInfoForm";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { AbsenceInfoDocument } from "@root/sections/foster-child/education-records/absence-info/absence-info-document/AbsenceInfoDocument";
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Absence Info List",
    href: "/foster-child/education-records/absence-info",
  },
  {
    name: "Absence Info",
    href: "",
  },
];

const PAGE_TITLE = "Absence Info";
AbsenceInfoFormLayout.getLayout = function getLayout(page: any) {
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
export default function AbsenceInfoFormLayout() {
  const router = useRouter();
  // const { action, id } = router.query;

  return (
    <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
      <AbsenceInfoForm />
      <AbsenceInfoDocument />
    </HorizaontalTabs>
  );
}
