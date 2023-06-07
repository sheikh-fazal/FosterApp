import * as React from "react";

// form
// @mui
import { Grid, Box, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// utils

// components
import { FormProvider } from "@root/components/hook-form";
import SingleLevel from "./SingleLevel";
//

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "35%" },
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  pl: 2,
  pr: 2,
  pt: 2,
  pb: 4,
};

export default function LevelButtonsModal({
  open,
  handleClose,
  dataArr,
  accountDetail,
  setData,
}: any) {
  let theme = useTheme();
  return (
    <Modal
      sx={{
        borderRadius: "8px",
        border: "1px solid transparent",
      }}
      disableAutoFocus
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, background: theme.palette.background.default }}>
        <Typography
          sx={{ mb: 5, fontWeight: 700 }}
          id="modal-modal-title"
          variant="h5"
          component="h1"
        >
          Select Level
        </Typography>

        <SingleLevel />
      </Box>
    </Modal>
  );
}
