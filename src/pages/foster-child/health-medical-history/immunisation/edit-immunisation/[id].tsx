import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ImmunisationFrom from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-form/immunisationFrom";
import ImmunisationUploadTable from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-upload/immunisationUploadTable";
import Page from "@root/components/Page";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useGetImmunisationDetailQuery } from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";
import { immunisationInfoListValue } from "@root/sections/foster-child/health-medical-history/immunisation";
const PAGE_TITLE = "Immunisation";

EditImmunisation.getLayout = function GetLayout(page: any) {
  const router: any = useRouter();
  let { fosterChildId } = router.query;
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          // name: "",
          href: `/`,
        },
        {
          name: "Child Immunisation Info",
          href: `/foster-child/health-medical-history/immunisation?fosterChildId=${fosterChildId}`,
        },
        {
          name: "Immunisation info",
          href: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function EditImmunisation() {
  const router: any = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError }: any = useGetImmunisationDetailQuery({
    id,
  });
  if (isLoading) {
    return (
      <Page title={PAGE_TITLE}>
        <SkeletonFormdata />
      </Page>
    );
  }
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Immunisations Info", "Uploaded Documents"]}
      >
        <ImmunisationFrom
          immunisationData={{
            ...immunisationInfoListValue,
            ...(data?.data && {
              ...data?.data,
              date: new Date(data?.data?.date),
              dueDate: new Date(data?.data?.dueDate),
            }),
          }}
          action="edit"
          id={id}
        />
        <ImmunisationUploadTable action="edit" immunisationId={id} />
      </HorizaontalTabs>
    </Box>
  );
}
