import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AbsenceInfoForm from "@root/sections/foster-child/education-records/absence-info/absence-info-form/AbsenceInfoForm";
import { useRouter } from "next/router";
import { AbsenceInfoDocument } from "@root/sections/foster-child/education-records/absence-info/absence-info-document/AbsenceInfoDocument";
import { useGetAbsenceInfoByIdQuery } from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Absence Info List",
    href: `/foster-child/education-records/absence-info?fosterChildId=${query}`,
  },
  {
    name: "Absence Info",
    href: "",
  },
];

const PAGE_TITLE = "Absence Info";
AbsenceInfoFormLayout.getLayout = function getLayout(page: any) {
  const router = useRouter();
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function AbsenceInfoFormLayout() {
  const { query } = useRouter();
  const childInfoId = query["absence_info_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetAbsenceInfoByIdQuery(childInfoId);
  return (
    <HorizaontalTabs tabsDataArray={["Absence Info", "Documents"]}>
      <AbsenceInfoForm defaultValues={data?.[0]} />
      <AbsenceInfoDocument />
    </HorizaontalTabs>
  );
}
