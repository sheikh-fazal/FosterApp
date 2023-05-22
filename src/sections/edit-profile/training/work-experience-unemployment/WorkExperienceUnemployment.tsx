import { Grid } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import WorkExperience from "./work-experince/WorkExperience";
import Unemployement from "./unemployment/Unemployement";
const WorkExperienceUnemployment = () => {
  return (
    <Grid container direction="column">
      {/* tabs  */}
      <Grid item sm={12}>
        <HorizaontalTabs
          tabsDataArray={["Work Experience", "Unemployement Period"]}
        >
          <WorkExperience />
          <Unemployement />
        </HorizaontalTabs>
      </Grid>
    </Grid>
  );
};

export default WorkExperienceUnemployment;
