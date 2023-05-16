import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import SummaryAndRecommendationForm from "@root/sections/carer-info/personal-info/form-f/summary-and-recommendation/SummaryAndRecommendationForm";
import { usePutSummaryAndRecommendationMutation } from "@root/services/carer-info/personal-info/form-f/summary&recommendationApi";
import { enqueueSnackbar } from "notistack";

// Constants
const PAGE_TILE = "Form F";

SummaryAndRecommendation.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Form F List",
          href: "/carer-info/personal-info/form-f",
        },
        {
          name: "Summary And Recommendation",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function SummaryAndRecommendation() {
  const [putData, { isSuccess, isError, isLoading }] =
    usePutSummaryAndRecommendationMutation();

  const receiveDataHandler = async (formData: any) => {
    try {
      const res: any = await putData(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      // router.push("/carer-info/personal-info/carer-family-support-network");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  return (
    <Page title={PAGE_TILE}>
      <SummaryAndRecommendationForm
        formData={receiveDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
