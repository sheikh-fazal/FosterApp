import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { usePostSubstituteCarerMutation } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import VocationalCourseForm from "@root/sections/foster-child/vocational-course-info/vocational-course-form/VocationalCourseForm";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
const BREADCRUMBS = [
  {
    name: "",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Vocational Course Info List",
    href: "/foster-child/education-records/vocational-course-info",
  },
  {
    name: "Course Info",
    href: "/foster-child/education-records/vocational-course-info/details",
  },
];

const PAGE_TITLE = "Vocational Course Info";

export const TABSDATA = ["Course Info", "Upload Documents"];

VocationalCourseInfoForm.getLayout = function getLayout(page: any) {
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

export default function VocationalCourseInfoForm() {
  const router = useRouter();
  const id = router?.query?.fosterChildId;

  const formSubmitHandler = (formData: any) => {
    const body = { ...formData, carerType: "BC", status: " " };
    console.log(body);
  };
  return (
    <HorizontalTabs tabsDataArray={TABSDATA}>
      <VocationalCourseForm
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
