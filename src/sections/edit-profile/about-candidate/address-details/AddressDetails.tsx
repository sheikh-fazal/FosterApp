import { Grid } from "@mui/material";
import EditProfileHeader from "../../edit-profile-header/EditProfileHeader";
import PersonalDetailsForm from "./addressDetailsForm/AddressDetailsForm";

const AddressDetails = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={11}>
        {/* <EditProfileHeader /> */}
        <PersonalDetailsForm />
      </Grid>
    </Grid>
  );
};

export default AddressDetails;
