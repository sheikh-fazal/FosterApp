import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import { ClaDocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-background-info/cla-documentation?fosterChildId=${query}`,
  },
  {
    name: "CLA Documentation List",
    href: "",
  },
];

const PAGE_TITLE = "Add CLA Documentation";
// ----------------------------------------------------------------------

AddClaDocumentationList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function AddClaDocumentationList() {
  // const { query } = useRouter();
  const router = useRouter();
  return (
    <Page title={PAGE_TITLE}>
       <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <ClaDocumentationForm />
      </Paper>
    </Page>
  );
}
