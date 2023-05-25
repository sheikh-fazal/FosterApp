import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Grid, Modal, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useRefereneceTable } from "./useReferenceTable";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumns } from "./columnsInfo";
import UpdateRefForm from "./update-reference-form/UpdateRefForm";
// import { columns } from "./columns-info";

const ReferenceTable = () => {
  const theme: any = useTheme();
  const {
    tableRows,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    tableStatusInfo,
    openUpdateModel,
    closeUpdateModel,
  } = useRefereneceTable();

  const columns = getColumns({ openUpdateModel });
  return (
    <>
      <Grid container>
        <Grid item container>
          <Grid item>
            <Typography
              sx={{ fontWeight: 600, color: theme.palette.primary.main }}
            >
              Candidate Reference (Framework Ready Reference Multi)
            </Typography>
          </Grid>
          <Grid item>
            <InfoIcon sx={{ color: theme.palette.primary.main }} />
          </Grid>
        </Grid>
        <Grid item container>
          <CustomTable
            data={tableRows ?? []}
            columns={columns}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
            isPagination={false}
          />
        </Grid>
      </Grid>
      <Modal open={tableStatusInfo.updateModel} onClose={closeUpdateModel}>
        <Grid
          container
          sx={{
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          sm={5}
          xs={10}
        >
          {tableRows && (
            <UpdateRefForm close={closeUpdateModel} defValues={tableRows[0]} />
          )}
        </Grid>
      </Modal>
    </>
  );
};

export default ReferenceTable;
