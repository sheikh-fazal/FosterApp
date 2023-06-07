import React, { useState } from "react";
import BronzeLevel from "@root/assets/svg/bronze-level";
import SilverLevel from "@root/assets/svg/silver-level";
import GoldLevel from "@root/assets/svg/gold-level";
import { Box, Button, Grid } from "@mui/material";
import LevelButtons from "./Levels/LevelButtons";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useIndependencePackTable } from "./useIndependencePackTable";
import { IndependencePackData, columns } from ".";
import LevelButtonsModal from "./Levels/LevelButtonsModal";

export default function IndependencePackTable() {
  let [open, setOpen] = useState(false);
  const {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useIndependencePackTable();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <LevelButtons />
      <Grid container>
        <Grid xs={12} item>
          <TableHeader
            ref={tableHeaderRef}
            title="Life Skill Assessment"
            searchKey="search"
            showAddBtn
            onAdd={() => {
              setOpen(true);
            }}
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <CustomTable
            data={IndependencePackData}
            columns={columns}
            isLoading={false}
            isFetching={false}
            isError={false}
            isSuccess={true}
            showSerialNo
            // count={Math.ceil(data?.data?.meta?.total / limit)}
            currentPage={1}
            onPageChange={(data: any) => {
              console.log("Current page data: ", data);
            }}
            onSortByChange={(data: any) => {
              console.log("Sort by: ", data);
            }}
            rootSX={{ my: theme.spacing(2) }}
          />
        </Grid>
      </Grid>
      {open && <LevelButtonsModal handleClose={handleClose} open={open} />}
    </>
  );
}
