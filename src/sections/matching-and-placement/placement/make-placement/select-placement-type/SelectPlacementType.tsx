import React from "react";
import { Button, Grid} from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { SelectPlacementData } from ".";
import useSelectPlacementType from "./useSelectPlacementType";
import { LoadingButton } from "@mui/lab";

const SelectPlacementType = ({ disabled }: any) => {
  const { onSubmit, methods, handleSubmit, theme } = useSelectPlacementType();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container >
        {SelectPlacementData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id} mt={5} pl={2.5} pr={2.5}>
              <item.component
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
              >
                {item.componentProps.select
                  ? item.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
                {item?.heading}
              </item.component>
         
          </Grid>
        ))}
    <Grid item xs={12}  ml={2.5} mb={2.5} mt={1.5}>
     <Button sx={styles.saveBtn}>Save and Continue</Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default SelectPlacementType;

const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};
