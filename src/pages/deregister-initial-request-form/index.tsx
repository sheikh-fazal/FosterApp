import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import DeregisterInitialRequestForm from "@root/sections/deregister-initial-request/DeregisterInitialRequestForm";
import DeregisterSWAssessment from "@root/sections/deregister-sw-assessment/DeregisterSWAssessment";
import DeregisterSWAssessmentForm from "@root/sections/deregister-sw-assessment/form/DeregisterSWAssessmentForm";

// ----------------------------------------------------------------------

const PAGE_TITLE = "De-Registration";

// ----------------------------------------------------------------------

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/",
  },
  {
    name: "De-reg initial Request",
    href: "/",
  },
  {
    name: 'Initial Request Form',
    href: "",
  },
];

// ----------------------------------------------------------------------

DereisterInitialForm.getLayout = function getLayout(page: any) {
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

// ----------------------------------------------------------------------

export default function DereisterInitialForm() {
  return (
    <Page title={PAGE_TITLE}>
      {/* <DeregisterInitialRequestForm /> */}
      {/* <DeregisterSWAssessment /> */}
      <DeregisterSWAssessmentForm />
    </Page>
  );
}
