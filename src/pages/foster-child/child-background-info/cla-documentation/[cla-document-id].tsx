import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import { ClaDocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";


// Constants
const BREADCRUMBS = [
    {
        icon: <HomeIcon />,
        name: "Child Info",
        href: "/",
    },
    {
        name: "CLA Documentation List",
        href: "",
    },
];

const PAGE_TITLE = "View CLA Documentation";
// ----------------------------------------------------------------------

ViewClaDocumentationList.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={BREADCRUMBS}
            title={PAGE_TITLE}>
            {page}
        </Layout>
    );
};

export default function ViewClaDocumentationList() {
    // cla-document-id
    // Call api with above ID
    // get data from the response
    // pass the values of the document as "defaultvalues"
    return (
        <Page title={PAGE_TITLE}>
            <Paper elevation={3}>
                {/* SHow form skeleton if loadin */}

                {/* show form is not loading */}
                <ClaDocumentationForm defaultFormType="EHCP" disable />
            </Paper>
        </Page>
    );
}