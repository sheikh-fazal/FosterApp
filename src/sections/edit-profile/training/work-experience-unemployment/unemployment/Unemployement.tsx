import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Modal } from "@mui/material";
import ButtonWithIcon from "@root/sections/edit-profile/locals/ButtonWithIcon";
import WorkExperinceForm from "./addUnemployementPeriodForm/UnemployementPeriodForm";
const Unemployement = () => {
  const theme: any = useTheme();
  const [flags, setFlags] = useState({ workExperienceModel: false });
  const workExperienceModelOpen = () => {
    setFlags((pre) => ({ ...pre, workExperienceModel: true }));
  };

  const workExperienceModelClose = () => {
    setFlags((pre) => ({ ...pre, workExperienceModel: false }));
  };

  return (
    <Grid container direction="column">
      <Grid item container>
        <ButtonWithIcon
          text="Add Unemployement Period"
          onClick={workExperienceModelOpen}
        />
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <Button variant="contained">continue</Button>
      </Grid>
      <Modal
        open={flags.workExperienceModel}
        onClose={workExperienceModelClose}
      >
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
          <WorkExperinceForm close={workExperienceModelClose} />
        </Grid>
      </Modal>
    </Grid>
  );
};

export default Unemployement;
