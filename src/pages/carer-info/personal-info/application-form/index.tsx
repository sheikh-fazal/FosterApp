import Layout from "@root/layouts";
import React from "react";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { BasicInformationForm } from "@root/sections/carer-info/personal-info/application-form/basic-information";
import { ContactForm } from "@root/sections/carer-info/personal-info/application-form/contact";
import { OtherInfoForm } from "@root/sections/carer-info/personal-info/application-form/other-info";
import { PlacementPreferenceForm } from "@root/sections/carer-info/personal-info/application-form/placement-preference";
import FamilyTable from "@root/sections/carer-info/personal-info/application-form/family/FamilyTable";
import Reference from "@root/sections/carer-info/personal-info/application-form/reference/Reference";
import Employers from "@root/sections/carer-info/personal-info/application-form/employers/Employers";
import ExPartners from "@root/sections/carer-info/personal-info/application-form/ex-partners/ExPartners";
import Documents from "@root/sections/carer-info/personal-info/application-form/documents/index";

//  @mui icons
import HomeIcon from "@mui/icons-material/Home";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Application Form",
    href: "/carer-info/personal-info/appliation-form",
  },
];

const PAGE_TITLE = "Application Form";

export const ApplicationTabsData = [
  "Basic Information",
  "Contact",
  "Family",
  "Reference",
  "Employers",
  "Other Info",
  "Ex-Partners",
  "Placement Preference",
  "Documents",
];

// ----------------------------------------------------------------------

ApplicationForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function ApplicationForm() {
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={ApplicationTabsData}>
        <BasicInformationForm disabled={true} />
        <ContactForm disabled={true} />
        <FamilyTable />
        <Reference />
        <Employers />
        <OtherInfoForm disabled={true} />
        <ExPartners />
        <PlacementPreferenceForm disabled={true} />
        <Documents />
      </HorizaontalTabs>
    </Page>
  );
}
