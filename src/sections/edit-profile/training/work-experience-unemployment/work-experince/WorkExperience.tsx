import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Modal } from "@mui/material";
import ButtonWithIcon from "@root/sections/edit-profile/locals/ButtonWithIcon";
import WorkExperinceForm from "./addeExperinceForm/WorkExperinceForm";
const WorkExperience = () => {
  const theme: any = useTheme();
  const [flags, setFlags] = useState({ addTrainingModel: false });
  const addTrainingModelOpen = () => {
    setFlags((pre) => ({ ...pre, addTrainingModel: true }));
  };

  const addTrainingModelClose = () => {
    setFlags((pre) => ({ ...pre, addTrainingModel: false }));
  };

  return (
    <Grid container direction="column">
      <Grid item container>
        <ButtonWithIcon
          text="Add Work Experience"
          onClick={addTrainingModelOpen}
        />
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <Button variant="contained">continue</Button>
      </Grid>
      <Modal open={flags.addTrainingModel} onClose={addTrainingModelClose}>
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
          <WorkExperinceForm close={addTrainingModelClose} />
        </Grid>
      </Modal>
    </Grid>
  );
};

export default WorkExperience;
