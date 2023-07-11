import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-form/AbsenceInfoForm";
import { useGetAbsenceInfoDocumentByIdQuery } from "@root/services/foster-child/education-records/absence-info/AbsenceInfoDocumentationAPI";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/",
  },
  {
    name: "Absence Info List",
    href: "/foster-child/education-records/absence-info",
  },
];

const PAGE_TITLE = "Absence Info";

EditAbsenceInfoForm.getLayout = function getLayout(page: any) {
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

export default function EditAbsenceInfoForm() {
  const { query } = useRouter();
  // const absenceInfoId = query["absence_info_id"];
  // const {data, isLoading, isSuccess, isError} = useGetAbsenceInfoDocumentByIdQuery(absenceInfoId);

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabDataArray={["Absence Info", "Upload Documents"]}>
        <AbsenceInfoForm />
      </HorizaontalTabs>
    </Page>
  );
}
