// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
// components
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PetQuestionnaireA from "@root/sections/carer-info/personal-info/pet-questionnaire/A/PetQuestionnaireAFrom";
import PetQuestionnaireB from "@root/sections/carer-info/personal-info/pet-questionnaire/B/PetQuestionnaireBFrom";
import PetQuestionnaireC from "@root/sections/carer-info/personal-info/pet-questionnaire/C/PetQuestionnaireCFrom";
import PetQuestionnaireD from "@root/sections/carer-info/personal-info/pet-questionnaire/D/PetQuestionnaireDFrom";
// Api
import {
  usePatchPetQuestionnaireBApiMutation,
  usePatchPetQuestionnaireCApiMutation,
  usePatchPetQuestionnaireDApiMutation,
  usePostPetQuestionnaireAApiMutation,
} from "@root/services/carer-info/personal-info/pet-questionnaire/petQuestionnaireApi";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Pet Questionnaire List",
    href: "/carer-info/personal-info/pet-questionnaire",
  },
  {
    name: "Add Pet Questionnaire",
    href: "",
  },
];

const PAGE_TITLE = "Pet Questionnaire";

// ----------------------------------------------------------------------

AddPetQuestionnaire.getLayout = function getLayout(page: any) {
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

export default function AddPetQuestionnaire() {
  const [postDataA] = usePostPetQuestionnaireAApiMutation();
  const [postDataB] = usePatchPetQuestionnaireBApiMutation();
  const [postDataC] = usePatchPetQuestionnaireCApiMutation();
  const [postDataD] = usePatchPetQuestionnaireDApiMutation();

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
        <PetQuestionnaireA onSubmitHandler={postDataA} message="Added" />
        <PetQuestionnaireB onSubmitHandler={postDataB} message="Added" />
        <PetQuestionnaireC onSubmitHandler={postDataC} message="Added" />
        <PetQuestionnaireD onSubmitHandler={postDataD} message="Added" />
      </HorizaontalTabs>
    </Page>
  );
}
