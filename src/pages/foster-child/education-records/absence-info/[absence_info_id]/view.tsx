import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import { AbsenceInfoDocument } from "@root/sections/foster-child/education-records/absence-info/absence-info-document/AbsenceInfoDocument";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-form/AbsenceInfoForm";
import { useGetAbsenceInfoByIdQuery } from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
import { useGetAbsenceInfoDocumentByIdQuery } from "@root/services/foster-child/education-records/absence-info/AbsenceInfoDocumentationAPI";
import { log } from "console";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/education-records/absence-info?fosterChildId=${query}`,
  },
  {
    name: "Absence Info List",
    href: "/foster-child/education-records/absence-info",
  },
];

const PAGE_TITLE = "View Absence Info";

ViewAbsenceInfoForm.getLayout = function getLayout(page: any) {
  const router = useRouter();
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewAbsenceInfoForm() {
  const { query } = useRouter();
  const absenceInfoId = query["absence_info_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetAbsenceInfoByIdQuery(absenceInfoId);
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={["Absence Info", "Upload Documents"]}>
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <AbsenceInfoForm
            disabled
            defaultValues={{
              ...data?.[0],
              dateOfAbsence: new Date(data?.[0]?.dateOfAbsence),
              label: new Date(data?.[0]?.label),
            }}
          />
        )}
        <AbsenceInfoDocument />
      </HorizaontalTabs>
    </Page>
  );
}
