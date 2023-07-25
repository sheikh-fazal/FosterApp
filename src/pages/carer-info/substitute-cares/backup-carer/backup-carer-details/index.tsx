import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { usePostSubstituteCarerMutation } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
    name: "",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Carer Info",
    href: "/carer-info/substitute-cares/backup-carer",
  },
  {
    name: "Backup Carer",
    href: "/carer-info/substitute-cares/backup-carer/backup-carer-details",
  },
];

const PAGE_TITLE = "Backup Carer";

export const TABSDATA = ["Backup Carer", "Upload Documents"];

BackupCarerDetails.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function BackupCarerDetails() {
  const [postBackupCarerData, status] = usePostSubstituteCarerMutation();

  const router = useRouter();
  const id = router?.query?.fosterCarerId;

  const formSubmitHandler = async (formData: any) => {
    const body = { ...formData, carerType: "BC", status: " " };
    try {
      const res: any = await postBackupCarerData(body).unwrap();
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
  };
  return (
    <HorizontalTabs tabsDataArray={TABSDATA}>
      <SubstituteCarerForm
        onSubmit={(data: any) => {
          formSubmitHandler(data);
        }}
        status={status}
        onEdit={(data: any) => console.log(data)}
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
        column={["document", "documentType", "date", "personName", "password"]}
        modalData={() => {}}
        onPageChange={(page: any) => console.log("parent log", page)}
        currentPage={"1"}
        totalPages={"1"}
      />
    </HorizontalTabs>
  );
}
