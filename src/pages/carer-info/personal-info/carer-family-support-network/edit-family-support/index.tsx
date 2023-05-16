// components
import Page from "@root/components/Page";
import { CarerFamilySupportNetworkForm } from "@root/sections/carer-info/personal-info/carer-family-support-network";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import {
  useGetCarerFamilyByIdQuery,
  usePutCarerFamilyByIdMutation,
} from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import Error from "@root/components/Error";
import IsFetching from "@root/components/loaders/IsFetching";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Family Support Network List",
    href: "/carer-info/personal-info/carer-family-support-network",
  },
  {
    name: "Edit Member Details",
    href: "",
  },
];

const PAGE_TITLE = "Family Support Network";

EditFamilySupport.getLayout = function getLayout(page: any) {
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

export default function EditFamilySupport() {
  const router = useRouter();
  const id = Object.keys(router?.query)[0];

  const { data, isLoading, isError } = useGetCarerFamilyByIdQuery(id);

  const [updateData, { isSuccess, isError: isErrorPut }] =
    usePutCarerFamilyByIdMutation();

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      {isLoading ? (
        <IsFetching isFetching={isLoading} />
      ) : (
        <CarerFamilySupportNetworkForm
          initialValueProps={{
            ...data,
            dateOfBirth: new Date(data?.dateOfBirth),
          }}
          onSubmitHandler={updateData}
          message={"Updated"}
          isError={isErrorPut}
          isSuccess={isSuccess}
        />
      )}
    </Page>
  );
}
