import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import PetQuestionnaireTable from "@root/sections/carer-info/personal-info/pet-questionnaire/PetQuestionnaireTable";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Pet Questionnaire List",
    href: "",
  },
];

const PAGE_TITLE = "Pet Questionnaire";

// ----------------------------------------------------------------------
PetQuestionnaire.getLayout = function getLayout(page: any) {
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

// ----------------------------------------------------------------------
export default function PetQuestionnaire() {
  return (
    <Page title={PAGE_TITLE}>
      <PetQuestionnaireTable />
    </Page>
  );
}
