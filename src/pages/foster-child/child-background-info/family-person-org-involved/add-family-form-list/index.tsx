import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import FamilyOrgInvolvedForm from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-form-list/FamilyOrgInvolvedForm";
import { FamilyPersonDocument } from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-person-document/FamilyPersonDocument";
// import { useGetFamilyPersonListByIdQuery } from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-background-info/family-person-org-involved?fosterChildId=${query}`,
  },
  {
    name: "Family Persons & Org Involved List",
    href: "",
  },
];

const PAGE_TITLE = "Family Persons & Org Involved";
// ----------------------------------------------------------------------

FamilyPersonList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function FamilyPersonList() {
  const router = useRouter();
  // const { query } = useRouter();
  // console.log(query);

  // const familyPersonId = query["family_person_id"];
  // const { data, isLoading, isSuccess, isError } =
  //   useGetFamilyPersonListByIdQuery(familyPersonId, {
  //     skip: !familyPersonId,
  //   });

  // console.log("Is loading: ", data);
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
        sx={{ mb: 2 }}
      />
      <Paper elevation={3}>
        <HorizaontalTabs
          tabsDataArray={["Family Org Involved", "Uploaded documents"]}
        >
          {/* Family Person Form */}

          <FamilyOrgInvolvedForm />

          {/* Upload Document */}
          <FamilyPersonDocument />
        </HorizaontalTabs>
      </Paper>
    </Page>
  );
}
