import React, { Dispatch, FC, SetStateAction } from "react";
import { Grid, Modal } from "@mui/material";
import UploadDocsForm from "./upload-docs-form/UploadDocsForm";

const UploadDocsModel: FC<{
  modelStatus: boolean;
  closeAddModel: () => void;
  openAddModel: () => void;
}> = ({ modelStatus, closeAddModel, openAddModel }) => {
  return (
    <Modal open={modelStatus} onClose={closeAddModel}>
      <Grid
        container
        sx={{
          background: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        item
        sm={5}
        xs={10}
      >
        <UploadDocsForm closeModel={closeAddModel} />
      </Grid>
    </Modal>
  );
};

export default UploadDocsModel;
