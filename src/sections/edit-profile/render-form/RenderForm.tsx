import { FC, Suspense } from "react";
import FormSkeleton from "./FormSkeleton";
import { RForm } from "./Forms";
import { Grid } from "@mui/material";

const RenderForm: FC<{ name: string; activateNextForm: () => void }> = ({
  name,
  activateNextForm,
}) => {
  return (
    <>
      <Suspense fallback={<FormSkeleton />}>
        {/* <Grid
          container
          sx={{
            maxHeight: "600px",
            overflow: "auto",
          }}
        > */}
        <RForm name={name} activateNextForm={activateNextForm} />
        {/* </Grid> */}
      </Suspense>
    </>
  );
};

export default RenderForm;
