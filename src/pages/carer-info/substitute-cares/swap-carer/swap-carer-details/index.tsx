import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useEditSubstituteCarerMutation,
  useGetSubstituteCarerByIdQuery,
  usePostSubstituteCarerMutation,
} from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import usePath from "@root/hooks/usePath";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Swap Carer";

export const TABSDATA = ["Swap Carer", "Upload Documents"];

SwapCarerDetails.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function SwapCarerDetails() {
  const { makePath } = usePath();
  const BREADCRUMBS = [
    {
      name: "",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Swap Carer",
      href: makePath({
        path: "/carer-info/substitute-cares/swap-carer",
      }),
    },
    {
      name: "Swap Carer Details",
      href: "/carer-info/substitute-cares/swap-carer/swap-carer-details",
    },
  ];
  const router = useRouter();
  const id = router?.query?.fosterCarerId;
  const [postSwapCarerData, status] = usePostSubstituteCarerMutation();
  const [editCarerData, editingStatus] = useEditSubstituteCarerMutation();

  const formSubmitHandler = async (formData: any) => {
    const body = { ...formData, carerType: "SC", status: " " };
    try {
      const res: any = await postSwapCarerData(body).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/substitute-cares/respite-carer?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
    console.log(body);

    postSwapCarerData(body);
  };
  // const { data, isSuccess, isError } = useGetSubstituteCarerByIdQuery(
  //   "17210af4-a43c-40a8-bf70-c43d6cb45ea0"
  // );
  const formEditHandler = async (body: any) => {
    // const body = { ...formData, carerType: "BC", status: " " };
    try {
      const res: any = await editCarerData(body).unwrap();
      enqueueSnackbar(res?.message ?? `Details Edited Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/substitute-cares/respite-carer?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizontalTabs tabsDataArray={TABSDATA}>
        <SubstituteCarerForm
          onSubmit={formSubmitHandler}
          status={status}
          onEdit={formEditHandler}
        />

        <UploadDocuments
          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          tableData={[]}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          column={[
            "document",
            "documentType",
            "date",
            "personName",
            "password",
          ]}
          modalData={() => {}}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={"1"}
          totalPages={"1"}
        />
      </HorizontalTabs>
    </Page>
  );
}
