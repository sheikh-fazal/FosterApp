import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { Button, Grid } from "@mui/material";
import { PlacementAgreementCarerData } from ".";
import { usePlacementAgreementWithCarer } from "./usePlacementAgreementWithCarer";
import TableHeader from "@root/components/TableHeader";
import PlacementAgreementcarerAddModal from "./Modal/PlacementAgreementcarerAddModal";

const PlacementAgreementWithCarer = () => {
  const {
    PlacementAgreementCarerTableColumns,
    theme,
    isOpenPlacementAgreementModal,
    setIsOpenPlacementAgreementModal,
    onAddPlacementAgreementModal,
  } = usePlacementAgreementWithCarer();

  return (
    <Grid container>
      <Grid item xs={12} mt={2}>
        <TableHeader
          title="Placement Special Needs Agreement"
          showAddBtn
          hideSearch
          onAdd={() => setIsOpenPlacementAgreementModal(true)}
        />
        <CustomTable
          data={PlacementAgreementCarerData}
          columns={PlacementAgreementCarerTableColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2), p: 2.5 }}
        />
      </Grid>
      <Grid item xs={12} ml={2.8} mb={2} mt={0}>
        <Button sx={styles.saveBtn}>Continue</Button>
        <PlacementAgreementcarerAddModal
          title="Placement Agrement With Carer"
          open={isOpenPlacementAgreementModal}
          handleClose={() => setIsOpenPlacementAgreementModal(false)}
          onSubmit={onAddPlacementAgreementModal}
        />
      </Grid>
    </Grid>
  );
};

export default PlacementAgreementWithCarer;

const styles = {
  saveBtn: {
    backgroundColor: "#0E918C",
    color: "#fff",
    "&:hover": { backgroundColor: "#0E918C" },
    px: 2.2,
    py: 1,
    fontSize: "16px",
    fontWeight: 600,
  },
};
