import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
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
  return (
    <HorizontalTabs tabsDataArray={TABSDATA}>
      <SubstituteCarerForm />

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
