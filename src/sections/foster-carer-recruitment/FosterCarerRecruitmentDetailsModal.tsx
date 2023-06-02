import { Box, Modal } from "@mui/material";
import React from "react";

const FosterCarerRecruitmentDetailsModal = ({ details, setDetails }: any) => {
  return (
    <Modal
      open={!!details}
      onClose={() => {
        setDetails(false);
      }}
    >
      <Box sx={style}>{details}</Box>
    </Modal>
  );
};

export default FosterCarerRecruitmentDetailsModal;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: 600,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "32px",
  textAlign: "center",
};
