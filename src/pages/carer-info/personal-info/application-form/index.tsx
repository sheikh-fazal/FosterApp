import Layout from "@root/layouts";
import React from "react";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import {
  BasicInformationForm,
  defaultValues as BasicdefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/basic-information";
import {
  ContactForm,
  defaultValues as contactDefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/contact";
import {
  OtherInfoForm,
  defaultValues as otherInfoDefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/other-info";
import {
  PlacementPreferenceForm,
  defaultValues as placementPreferenceDefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/placement-preference";
import FamilyTable from "@root/sections/carer-info/personal-info/application-form/family/FamilyTable";
import Reference from "@root/sections/carer-info/personal-info/application-form/reference/ReferenceTable";
import Employers from "@root/sections/carer-info/personal-info/application-form/employers/EmployersTable";
import ExPartners from "@root/sections/carer-info/personal-info/application-form/ex-partners/ExPartnersTable";

//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { DocumentTable } from "@root/sections/carer-info/personal-info/application-form/documents/DocumentTable";
import { useGetApplicationFormDataQuery } from "@root/services/carer-info/personal-info/application-form/ApplicationFormAllApi";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

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
  let role = "ifa";
  const { data, isLoading, isError }: any = useGetApplicationFormDataQuery({});
  if (isLoading) {
    return (
      <Page title={PAGE_TITLE}>
        <SkeletonFormdata />
      </Page>
    );
  }

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={ApplicationTabsData}>
        <BasicInformationForm
          role={role}
          disabled={role == "foster-carer" ? true : false}
          id={data?.data?.id}
          data={{
            ...BasicdefaultValues,
            ...(data?.data?.basicInformation && {
              ...data?.data?.basicInformation,
              applicationFilledDate: new Date(
                data?.data?.basicInformation?.applicationFilledDate
              ),
              dateOfBirth: new Date(data?.data?.basicInformation?.dateOfBirth),
            }),
          }}
        />
        <ContactForm
          role={role}
          apllicationFormid={data?.data?.id}
          data={{
            ...contactDefaultValues,
            ...(data?.data?.contact && {
              ...data?.data?.contact,
            }),
          }}
          disabled={role == "foster-carer" ? true : false}
        />
        <FamilyTable role={role} apllicationFormid={data?.data?.id} />
        <Reference role={role} apllicationFormid={data?.data?.id} />
        <Employers role={role} apllicationFormid={data?.data?.id} />
        <OtherInfoForm
          role={role}
          data={{
            ...otherInfoDefaultValues,
            ...(data?.data?.otherInfo && {
              ...data?.data?.otherInfo,
              authorityOrAgency: data?.data?.otherInfo.authorityOrAgency
                ? "Yes"
                : "No",
              haveApplied: data?.data?.otherInfo.haveApplied ? "Yes" : "No",
            }),
          }}
          disabled={role == "foster-carer" ? true : false}
        />
        <ExPartners role={role} apllicationFormid={data?.data?.id} />
        <PlacementPreferenceForm
          role={role}
          data={{
            ...placementPreferenceDefaultValues,
            ...(data?.data?.placementPreference && {
              ...data?.data?.placementPreference,
            }),
          }}
          disabled={role == "foster-carer" ? true : false}
        />
        <DocumentTable role={role} />
      </HorizaontalTabs>
    </Page>
  );
}
