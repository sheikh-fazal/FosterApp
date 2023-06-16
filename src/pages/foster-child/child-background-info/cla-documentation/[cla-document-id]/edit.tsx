import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import { ClaDocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";
import { useGetClaDocumentationByIdQuery } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/child-background-info/cla-documentation",
  },
  {
    name: "CLA Documentation List",
    href: "",
  },
];

const PAGE_TITLE = "View CLA Documentation";
// ----------------------------------------------------------------------

EditClaDocumentationList.getLayout = function getLayout(page: any) {
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

export default function EditClaDocumentationList() {
  const { query } = useRouter();
  const documentId = query["cla-document-id"];
  const { data, isLoading, isSuccess, isError } =
    useGetClaDocumentationByIdQuery(documentId);
  console.log(data, "When Edit");

  // cla-document-id
  // Call api with above ID
  // get data from the response
  // pass the values of the document as "defaultvalues"
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        {/* SHow form skeleton if loadin */}

        {/* show form is not loading */}
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <ClaDocumentationForm
            defaultFormType={data.data.documentType}
            defaultValues={data.data}
          />
        )}
      </Paper>
    </Page>
  );
}
