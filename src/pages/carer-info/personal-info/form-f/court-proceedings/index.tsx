import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CourtProceedingsForm from "@root/sections/carer-info/personal-info/form-f/court-proceedings/CourtProceedingsForm";
import { usePutCourtProceedingMutation } from "@root/services/carer-info/personal-info/form-f/courtProceedingApi";
import { enqueueSnackbar } from "notistack";

// Constants
const PAGE_TITLE = "Form F";

CourtProceedings.getLayout = function getLayout(page: any) {
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
          name: "Court Proceedings",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function CourtProceedings() {
  const [putData, { isSuccess, isError, isLoading }] =
    usePutCourtProceedingMutation();

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
    <Page title={PAGE_TITLE}>
      <CourtProceedingsForm
        formData={receiveDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
