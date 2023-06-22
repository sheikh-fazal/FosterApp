import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useGetFamilyPersonListByIdQuery } from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import FamilyOrgInvolvedForm from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-form-list/FamilyOrgInvolvedForm";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/child-background-info/family-person-org-involved",
  },
  {
    name: "Family Persons & Org Involved List",
    href: "",
  },
];

const PAGE_TITLE = "Edit Family Persons & Org Involved";
// ----------------------------------------------------------------------

EditFamilyPersonForm.getLayout = function getLayout(page: any) {
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

export default function EditFamilyPersonForm() {
  const { query } = useRouter();
  const familyPersonId = query["family_person_id"];
  const { data, isLoading, isSuccess, isError } =
  useGetFamilyPersonListByIdQuery(familyPersonId);

  console.log("Is loading: ", data);
  
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={4} sx={{ padding: 3 }}>
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
            <FamilyOrgInvolvedForm 
            defaultValues={data[0]}
            />
        )}
      </Paper>
    </Page>
  );
}
