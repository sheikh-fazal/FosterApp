import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import { ClaDocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";
import { useRouter } from "next/router";


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
    const { query } = useRouter();
    const disabled = query.action === "view"

    console.log("disabled", disabled)
    // cla-document-id
    // Call api with above ID
    // get data from the response
    // pass the values of the document as "defaultvalues"
    return (
        <Page title={PAGE_TITLE}>
            <Paper elevation={3}>
                {/* SHow form skeleton if loadin */}

                {/* show form is not loading */}
                <ClaDocumentationForm defaultFormType="EHCP" disabled={disabled} />
            </Paper>
        </Page> 
    );
}