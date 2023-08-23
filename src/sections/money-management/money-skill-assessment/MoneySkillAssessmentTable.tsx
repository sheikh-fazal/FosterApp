import React from "react";
import { Box, Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import CustomTable from "@root/components/Table/CustomTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { useMoneySkillAssessmentTable } from "./useMoneySkillAssessmentTable";
import dayjs from "dayjs";
import { forEach } from "lodash";

export const MoneySkillAssessmentTable = () => {
  const {
    router,
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    headerChangeHandler,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useMoneySkillAssessmentTable();

  console.log("klsahd jkogsafsduyafnh", data?.money_skill_assessment);
  const obj: any = {
    obj1: "43",
    obj2: "43",
    obj3: "",
    obj4: "",
    obj5: "43",
    obj6: "",
    obj7: "4sda3",
    obj8: "4czx3",
  };
  let score = 0;
  data?.money_skill_assessment?.forEach((item: any) => {
    console.log(item);
    for (const key in item) {
      if (item[key]) score++;
    }
  });
  // for (const assessment of data) {
  //   console.log(assessment);

  //   // for (const key in assessment) {
  //   //   if (obj[key]) score++;
  //   // }
  // }

  console.log("Score: ", score);

  const columns = [
    {
      accessorFn: (row: any) => row?.date,
      id: "date",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => score,
      id: "score",
      cell: (info: any) => info.getValue(),
      header: () => <span>Score</span>,
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
              router.push({
                pathname: `/money-management/money-skill-assessment/${info.getValue()}/edit`,
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/money-management/money-skill-assessment/${info.getValue()}/view`,
              })
            }
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Money Skill Assessment"
          searchKey="search"
          onChanged={headerChangeHandler}
          onAdd={() =>
            router.push({
              pathname:
                "/money-management/money-skill-assessment/add-money-skill-assessment",
            })
          }
        />
        <CustomTable
          showSerialNo
          data={data?.money_skill_assessment}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          currentPage={data?.meta?.page}
          totalPages={data?.meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
};
