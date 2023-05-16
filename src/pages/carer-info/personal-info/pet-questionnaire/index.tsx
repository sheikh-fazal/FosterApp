import { Box, Card } from "@mui/material";
import dayjs from "dayjs";
// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
// table
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import CustomTable from "@root/components/Table/CustomTable";
// hooks
import router from "next/router";
import { useRef } from "react";
import { useTableParams } from "@root/hooks/useTableParams";
// Api
import { useGetPetQuestionnaireTableApiQuery } from "@root/services/carer-info/personal-info/pet-questionnaire/petQuestionnaireApi";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Pet Questionnaire List",
    href: "",
  },
];

const PAGE_TITLE = "Pet Questionnaire";
// ----------------------------------------------------------------------

PetQuestionnaire.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function PetQuestionnaire() {
  const tableHeaderRef = useRef<any>();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetPetQuestionnaireTableApiQuery({ params });
  const petQuestionnaire = data?.questionnaire_list;
  const meta = data?.meta;

  // ----------------------------------------------------------------------

  const columns = [
    {
      accessorFn: (row: any) => row.createdAt,
      id: "createdAt",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Pet Questionnaire Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.petQuestionnaire3.date,
      id: "inspectionDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Next Inspection Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.petQuestionnaire1.nameOfAnimal,
      id: "nameOfAnimal",
      cell: (info: any) => info.getValue(),
      header: "Name Of Pet",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.petQuestionnaire2.registeredAVet,
      id: "status",
      cell: (info: any) => (info.getValue() ? "Yes" : "No"),
      header: "Status",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/carer-info/personal-info/pet-questionnaire/edit-pet-questionnaire?${info.getValue()}`
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/carer-info/personal-info/pet-questionnaire/view-pet-questionnaire?${info.getValue()}`
              )
            }
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <TableHeader
          ref={tableHeaderRef}
          disabled={isLoading}
          title="Pet Questionnaire List"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push(
              "/carer-info/personal-info/pet-questionnaire/add-pet-questionnaire"
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          data={petQuestionnaire}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          currentPage={meta?.page}
          totalPages={meta?.pages}
          showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </Page>
  );
}
