import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { VerificationOfDocumentsForm } from "@root/sections/carer-info/personal-info/form-f/verification-of-document";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import {
  useVerificationApplication1Mutation,
  useVerificationApplication2Mutation,
} from "@root/services/carer-info/personal-info/form-f/verificationOfDocumentsApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";

// Constants
const PAGE_TILE = "Form F";

VerificationOfDocument.getLayout = function getLayout(page: any) {
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
          name: "Verification of Documents",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function VerificationOfDocument() {
  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data: verificationDocuments1 } = useFormFQuery(
    "verificationApplication1",
    { skip }
  );
  const { data: verificationDocuments2 } = useFormFQuery(
    "verificaitonApplication2",
    { skip }
  );
  //---------------=================-----------------//
  const [
    putHealthApplication1Data,
    { isLoading: isLoading1, isError: isError1, isSuccess: isSuccess1 },
  ] = useVerificationApplication1Mutation();
  const [
    putHealthApplication2Data,
    { isLoading: isLoading2, isError: isError2, isSuccess: isSuccess2 },
  ] = useVerificationApplication2Mutation();
  //--------------------recieve functions----------------------------------//
  const receiveDataHandlerApplicant1 = async (formData: any) => {
    try {
      const res: any = await putHealthApplication1Data(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      // router.push("/carer-info/personal-info/carer-family-support-network");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  const receiveDataHandlerApplicant2 = async (formData: any) => {
    try {
      const res: any = await putHealthApplication2Data(formData).unwrap();
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
      <HorizaontalTabs tabsDataArray={["Applicant 1", "Applicant 2"]}>
        <VerificationOfDocumentsForm
          formData={receiveDataHandlerApplicant1}
          isLoading={isLoading1}
          isError={isError1}
          isSuccess={isSuccess1}
        />
        <VerificationOfDocumentsForm
          formData={receiveDataHandlerApplicant2}
          isLoading={isLoading2}
          isError={isError2}
          isSuccess={isSuccess2}
        />
      </HorizaontalTabs>
    </Page>
  );
}
