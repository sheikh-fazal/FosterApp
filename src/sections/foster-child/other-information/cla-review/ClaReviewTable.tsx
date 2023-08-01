import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef, useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { useRouter } from "next/router";
import { data, getColumnsClaReview } from "./";
import DeleteModel from "@root/components/modal/DeleteModel";

export default function ClaReviewTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();
  const router = useRouter();

  const [open, setOpen] = useState<any>(false);

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columnsClaReview = getColumnsClaReview(makePath, setOpen);

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={false}
        title="CLA Reviews"
        searchKey="search"
        onChanged={headerChangeHandler}
        showAddBtn
        onAdd={() => {
          router.push(
            makePath({
              path: "/foster-child/other-information/cla-review/add-cla-review",
            })
          );
        }}
      />

      <CustomTable
        data={data}
        columns={columnsClaReview}
        showSerialNo
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        // currentPage={meta?.page}
        // totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />

      <DeleteModel
        open={!!open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => console.log(open)}
      />
    </Card>
  );
}
