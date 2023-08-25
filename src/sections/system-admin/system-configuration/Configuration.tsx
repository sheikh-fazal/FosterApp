import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Button, Card } from "@mui/material";
import useConfiguration from "./useConfiguration";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import EditSystemConfiguration from "./edit-system-configuration/EditSystemConfiguration";

export default function Configuration() {
  const {
    data,
    methods,
    handleSubmit,
    onSubmit,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    systemConfigurationColoums,
    openEditModel,
    setOpenEditModel
  } = useConfiguration();

  return (
    <>
      <EditSystemConfiguration openEditModel={openEditModel} setOpenEditModel={setOpenEditModel} />
      <Card>
        <TableHeader title="System Configuration" searchKey="search" />
        <CustomTable
          columns={systemConfigurationColoums}
          data={data?.data}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isError={false}
          isFetching={false}
          isLoading={false}
          isPagination={false}
          // currentPage={data?.data?.meta?.page}
          // totalPages={data?.data?.meta?.pages}
          // onPageChange={pageChangeHandler}
        />
      </Card>
    </>
  );
}
