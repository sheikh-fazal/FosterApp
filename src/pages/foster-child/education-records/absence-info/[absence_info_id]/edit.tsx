import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import FamilyOrgInvolvedForm from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-form-list/FamilyOrgInvolvedForm";
import { FamilyPersonDocument } from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-person-document/FamilyPersonDocument";
import { AbsenceInfoDocument } from "@root/sections/foster-child/education-records/absence-info/absence-info-document/AbsenceInfoDocument";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-form/AbsenceInfoForm";
import { useGetAbsenceInfoByIdQuery } from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/education-records/absence-info",
  },
  {
    name: "Absence Info List",
    href: "/foster-child/education-records/absence-info",
  },
];

const PAGE_TITLE = "Edit Absence Info";

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
  const childInfoId = query["absence_info_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetAbsenceInfoByIdQuery(childInfoId);

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={["Absence Info", "Upload Documents"]}>
        <AbsenceInfoForm
          defaultValues={{
            ...data?.[0],
            dateOfAbsence: new Date(data?.[0]?.dateOfAbsence),
            label: new Date(data?.[0]?.label),
          }}
        />
        <AbsenceInfoDocument />
      </HorizaontalTabs>
    </Page>
  );
}
{/* <Page title={PAGE_TITLE}>
  <HorizaontalTabs
    tabsDataArray={["Family Org Involved", "Uploaded documents"]}
  >
    {isLoading && <p>Loading...</p>}
    {isSuccess && <FamilyOrgInvolvedForm defaultValues={data[0]} />}

    <FamilyPersonDocument />
  </HorizaontalTabs>
</Page>; */}
