import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { usePostSubstituteCarerMutation } from "@root/services/carer-info/substitute-carers/substituteCarerApi";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
    name: "",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Carer Info",
    href: "/carer-info/substitute-cares/respite-carer",
  },
  {
    name: "Respite Carer",
    href: "/carer-info/substitute-cares/respite-carer/respite-carer-details",
  },
];

const PAGE_TITLE = "Respite Carer";

export const TABSDATA = ["Respite Carer", "Upload Documents"];

RespiteCarerDetails.getLayout = function getLayout(page: any) {
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

export default function RespiteCarerDetails() {
  const [postSwapCarerData, status] = usePostSubstituteCarerMutation();

  const formSubmitHandler = (formData: any) => {
    const body = { ...formData, carerType: "RC", status: " " };
    console.log(body);

    postSwapCarerData(body);
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
