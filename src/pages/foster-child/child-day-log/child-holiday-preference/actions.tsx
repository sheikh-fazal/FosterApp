import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildHolidayPreferenceForm from "@root/sections/foster-child/child-day-log/child-holiday-preference/ChildHolidayPreferenceForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

ChildHolidayPreferenceActions.getLayout = function GetLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function ChildHolidayPreferenceActions() {
  const Router: any = useRouter();
  const { action, fosterChildId, childHolidayPreferenceId } = Router.query;
  // Constants

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
    },
    {
      name: "Holiday Ideas List",
      href: {
        pathname: "/foster-child/child-day-log/child-holiday-preference",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Holiday Ideas List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Child Holiday Preference";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Holiday Details", "Uploaded Documents"]}
      >
        <ChildHolidayPreferenceForm
          action={action}
          fosterChildId={fosterChildId}
          childHolidayPreferenceId={childHolidayPreferenceId}
        />
        <UploadDocuments
          //readOnly={true}

          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          tableData={{}}
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
          modalData={(data: any) => {
            console.log("searched Value", data);
          }}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={"1"}
          totalPages={"1"}
        />
      </HorizaontalTabs>
    </Box>
  );
}
