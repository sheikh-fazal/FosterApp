import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";

import { useHealthAndSafetyTable } from "./useHealthAndSafetyTable";
import { HEALTH_AND_SAFETYDATA, columns } from ".";

export const HealthAndSafetyTable = () => {
  const {
    // open,
    // setOpen,
    // handleOpen,
    // handleClose,
    theme,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    isSuccess,
  } = useHealthAndSafetyTable();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return (
    <>
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          onAdd={() =>
            router.push(
              "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs"
            )
          }
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={healthAndSafetyApiData}
          columns={columns}
          showSerialNo
          isError={isError}
          isLoading={isLoading}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isPagination={false}
        />
      </Card>
    </>
  );
};
