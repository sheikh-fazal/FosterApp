import React from "react";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import StudySupportInfoForm from "@root/sections/foster-child/education-records/study-support-info/StudySupportInfoForm";

EditPreviousSocialWorker.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function EditPreviousSocialWorker() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "LA Social Worker List",
      href: {
        pathname: "/foster-child/social-worker-details/la-social-worker",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "LA Social Worker Details",
      href: "",
    },
  ];

  const PAGE_TITLE = "LA Social Worker ";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <StudySupportInfoForm disabled />
    </Box>
  );
}
