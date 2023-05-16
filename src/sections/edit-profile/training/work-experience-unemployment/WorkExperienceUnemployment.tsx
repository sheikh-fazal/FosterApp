import { Grid } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import WorkExperience from "./work-experince/WorkExperience";
import Unemplyment from "./unemployment/Unemplyment";
const WorkExperienceUnemployment = () => {
  return (
    <Grid container direction="column">
      {/* tabs  */}
      <Grid item sm={12}>
        <HorizaontalTabs
          tabsDataArray={["Work Experience", "Unemployement Period"]}
        >
          <WorkExperience />
          <Unemplyment />
        </HorizaontalTabs>
      </Grid>
    </Grid>
  );
};

export default WorkExperienceUnemployment;
