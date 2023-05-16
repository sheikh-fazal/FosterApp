import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { DateWhenInfoReceivedForm } from "@root/sections/carer-info/personal-info/form-f/date-when-info-recieved";
import { usePutDateWhenInfoReceivedApiMutation } from "@root/services/carer-info/personal-info/form-f/dateWhenInfoRecievedApi";
import { enqueueSnackbar } from "notistack";

// Constants
const PAGE_TILE = "Form F";

DateWhenInfoReceived.getLayout = function getLayout(page: any) {
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
          name: "Date when information was recieved",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function DateWhenInfoReceived() {
  const [putData, { isSuccess, isError, isLoading }] =
    usePutDateWhenInfoReceivedApiMutation();
  const receiveDataHandler = async (formData: any) => {
    try {
      const res: any = await putData(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Date Submitted Successfully`, {
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
      <DateWhenInfoReceivedForm
        formData={receiveDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
