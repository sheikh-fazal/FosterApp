import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StatutoryMedicalList from "@root/sections/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";
import { useRouter } from "next/router";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: !!query?.fosterChildId
      ? `/foster-child?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "Statutory Medical List",
    href: "",
  },
];

const PAGE_TITLE = "Statutory Medical List";
StatutoryMedicalListPage.getLayout = function getLayout(page: any) {
  const { query } = useRouter();
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(query)}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function StatutoryMedicalListPage() {
  return <StatutoryMedicalList />;
}
