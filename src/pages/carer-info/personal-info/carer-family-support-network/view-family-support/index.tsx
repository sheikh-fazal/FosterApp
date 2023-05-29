// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { CarerFamilySupportNetworkForm } from "@root/sections/carer-info/personal-info/carer-family-support-network";
import { useGetCarerFamilyByIdQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Family Support Network List",
    href: "/carer-info/personal-info/carer-family-support-network",
  },
  {
    name: "View Member Details",
    href: "",
  },
];

const PAGE_TITLE = "Family Support Network";

// ----------------------------------------------------------------------

ViewFamilySupport.getLayout = function getLayout(page: any) {
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

export default function ViewFamilySupport() {
  const router = useRouter();
  const id = Object.keys(router?.query)[0];

  const { data, isLoading, isError } = useGetCarerFamilyByIdQuery(id);

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <CarerFamilySupportNetworkForm
          disabled
          initialValueProps={{
            ...data,
            dateOfBirth: new Date(data?.dateOfBirth),
          }}
        />
      )}
    </Page>
  );
}
