// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
// components 
import AddSocialWorkerForm from "@root/sections/referral/social-worker-request/add-social-worker-request-form/AddSocialWorkerForm";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Referral",
    href: "/referral",
  },
  {
    name: "Social Worker Request Form",
    href: "",
  },
];

const PAGE_TITLE = "Social Worker Request Form";

// ----------------------------------------------------------------------

AddSocialWorker.getLayout = function getLayout(page: any) {
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

export default function AddSocialWorker() { 
  const router = useRouter();
  const { action, id } = router.query;

  return (
    <Page title={PAGE_TITLE}>
      <AddSocialWorkerForm action={action} id={id} />
    </Page>
  );
}
