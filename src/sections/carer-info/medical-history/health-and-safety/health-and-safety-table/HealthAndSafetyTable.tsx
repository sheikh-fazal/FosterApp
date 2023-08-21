import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import DeleteModel from "@root/components/modal/DeleteModel";

import { useHealthAndSafetyTable } from "./useHealthAndSafetyTable";

export const HealthAndSafetyTable = () => {
  const {
    deleteList,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    columnsFunction,
    isSuccess,
    healthAndSafetyId,
    meta,
    setHealthAndSafetyId,
    makePath,
    // headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch
  } = useHealthAndSafetyTable();

  return (
    <>
      <Card sx={{ p: 1 }}>
        <DeleteModel
          open={healthAndSafetyId && healthAndSafetyId}
          handleClose={() => setHealthAndSafetyId(null)}
          onDeleteClick={deleteList}
        />
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push(
              makePath({
                path: "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs",
              })
            );
          }}
          // onChanged={headerChangeHandler}
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={healthAndSafetyApiData}
          columns={columnsFunction}
          showSerialNo
          isError={isError}
          isLoading={isLoading}
          totalPages={meta?.pages ?? 0}
          currentPage={meta?.page ?? 1}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isPagination={false}
        />
      </Card>
    </>
  );
};
