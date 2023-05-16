import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { PetQuestionnaireA } from "@root/sections/carer-info/personal-info/chronology-of-events/pet-questionnaire/pet-questionnaire-A/PetQuestionnaireData";
import PetQuestionnaireB from "@root/sections/carer-info/personal-info/chronology-of-events/pet-questionnaire/pet-questionnaire-B/PetQuestionnaireB";
import PetQuestionnaireC from "@root/sections/carer-info/personal-info/chronology-of-events/pet-questionnaire/pet-questionnaire-C/PetQuestionnaireC";
import PetQuestionnaireD from "@root/sections/carer-info/personal-info/chronology-of-events/pet-questionnaire/pet-questionnaire-D/PetQuestionnaireD";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Supervisory Home Visit List",
    href: "/carer-info/personal-info/carer-chronology-of-events",
  },
  {
    name: "Pet Questionnaire",
    href: "",
  },
];

const PAGE_TITLE = "Pet Questionnaire";
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
export default function PetQuestionnaire() {
  // -------
  return (
    <HorizaontalTabs
      tabsDataArray={[
        "Pet Questionnaire A",
        "Pet Questionnaire B",
        "Pet Questionnaire C",
        "Pet Questionnaire D",
      ]}
    >
      {/* Pet Questionnaire A Component */}
      <PetQuestionnaireA />
      {/* Pet Questionnaire B Component */}
      <PetQuestionnaireB />
      {/* Pet Questionnaire C Component */}
      <PetQuestionnaireC />
      {/* Pet Questionnaire D Component */}
      <PetQuestionnaireD />
    </HorizaontalTabs>
  );
}
