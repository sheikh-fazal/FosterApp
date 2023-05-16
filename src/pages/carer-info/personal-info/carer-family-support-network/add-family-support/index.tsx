// components
import Page from "@root/components/Page";
import { CarerFamilySupportNetworkForm } from "@root/sections/carer-info/personal-info/carer-family-support-network";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
// Api
import { usePostCarerFamilyApiMutation } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Family Support Network List",
    href: "/carer-info/personal-info/carer-family-support-network",
  },
  {
    name: "Add Member Details",
    href: "",
  },
];

const PAGE_TITLE = "Family Support Network";

// ----------------------------------------------------------------------

AddFamilySupport.getLayout = function getLayout(page: any) {
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

export default function AddFamilySupport() {
  const [postData, { isError, isSuccess }] = usePostCarerFamilyApiMutation();

  return (
    <Page title={PAGE_TITLE}>
      <CarerFamilySupportNetworkForm
        onSubmitHandler={postData}
        message={"Added"}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
