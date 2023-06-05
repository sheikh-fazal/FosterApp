import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import ChildEducationInfoList from "@root/sections/foster-child/education-records/child-education-info/ChildEducationInfoList";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import action from "@root/pages/carer-info/other-information/next-of-kin/action";
import AllegationForm from "@root/sections/carer-info/personal-info/chronology-of-events/allegation/allegation-form/AllegationForm";
import UploadedDocumentsTable from "@root/sections/carer-info/personal-info/chronology-of-events/allegation/upload-documents/UploadDocumentsTable";
import { id } from "date-fns/locale";
import { useRouter } from "next/router";
import ChildEducationInfoForm from "@root/sections/foster-child/education-records/child-education-info/child-education-info-form/ChildEducationInfoForm";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "",
  },
  {
    name: "Education Info List",
    href: "",
  },
];

const PAGE_TITLE = "Child Education Info";

////-----------------------------------------
ChildEducationForm.getLayout = function getLayout(page: any) {
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

export default function ChildEducationForm() {
  const router = useRouter();
  const { action, id } = router.query;
  if (!action && !id) {
    router.push("/foster-child/education-records/child-education-info");
  }
  return (
    <HorizaontalTabs tabsDataArray={["Allegation", "Uploaded Documents"]}>
      {/* <AllegationForm action={action} id={id} /> */}
      <ChildEducationInfoForm action={action} id={id} />
      <UploadedDocumentsTable />
    </HorizaontalTabs>
  );
}
