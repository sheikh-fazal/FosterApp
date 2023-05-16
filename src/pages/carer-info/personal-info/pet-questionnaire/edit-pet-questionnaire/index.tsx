// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PetQuestionnaireA from "@root/sections/carer-info/personal-info/pet-questionnaire/A/PetQuestionnaireAFrom";
import PetQuestionnaireB from "@root/sections/carer-info/personal-info/pet-questionnaire/B/PetQuestionnaireBFrom";
import PetQuestionnaireC from "@root/sections/carer-info/personal-info/pet-questionnaire/C/PetQuestionnaireCFrom";
import PetQuestionnaireD from "@root/sections/carer-info/personal-info/pet-questionnaire/D/PetQuestionnaireDFrom";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Pet Questionnaire List",
    href: "/carer-info/personal-info/pet-questionnaire",
  },
  {
    name: "Edit Pet Questionnaire",
    href: "",
  },
];

const PAGE_TITLE = "Pet Questionnaire";

// ----------------------------------------------------------------------

EditPetQuestionnaire.getLayout = function getLayout(page: any) {
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

export default function EditPetQuestionnaire() {
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={[
          "Pet Questionnaire A",
          "Pet Questionnaire B",
          "Pet Questionnaire C",
          "Pet Questionnaire D",
        ]}
      >
        <PetQuestionnaireA />
        <PetQuestionnaireB />
        <PetQuestionnaireC />
        <PetQuestionnaireD />
      </HorizaontalTabs>
    </Page>
  );
}
