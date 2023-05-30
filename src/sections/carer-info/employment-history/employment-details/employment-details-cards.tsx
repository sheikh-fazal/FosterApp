import { Box, Card, Typography, useTheme } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import React, { useState } from "react";
import AddExperiencesModal from "./add-experience-modal";
import { useGetExperienceQuery } from "@root/services/carer-info/employment-history/employnmentDetailsApi";

function EmploymentDetailsCards() {
  const [open, setOpen] = useState(false);
  const theme: any = useTheme();

  const { data, isLoading } = useGetExperienceQuery();

  return (
    <Card>
      <Box sx={styles.header}>
        <Typography sx={{ fontWeight: 600, fontSize: "1.3rem" }}>
          Experience
        </Typography>
        <Box sx={styles.addBtnStyles(theme)} onClick={() => setOpen(true)}>
          <BsPlus style={styles.addBtnIconStyles(theme)} />
        </Box>
      </Box>

      {open && <AddExperiencesModal open={open} setOpen={setOpen} />}
    </Card>
  );
}

export default EmploymentDetailsCards;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: 2,
  },
  addBtnStyles: (theme: any) => ({
    width: "1.8rem",
    height: "1.8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: theme.palette.orange.main,
  }),
  addBtnIconStyles: (theme: any) => ({
    color: "#ffff",
    fontSize: "1.5rem",
  }),
};
