import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { allegationFormData, formSchema } from "./index";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useAllegationForm } from "./useAllegationForm";
function AllegationForm(props: any) {
  const { action, id } = props;
  //Allegation Custom Hook
  const { router, theme, onSubmit, isLoading, getDefaultValue } =
    useAllegationForm(action, id);
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });
  const { setValue, trigger, handleSubmit, getValues } = methods;

  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <Typography
        sx={{
          color: theme.palette.grey[500],
          fontWeight: theme.typography.fontWeightMedium,
          mb: theme.spacing(2),
        }}
        variant="subtitle2"
      >
        URN Number : CH001
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2} columnSpacing={5} alignItems="center">
          {allegationFormData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Box sx={{ px: 0.9, py: 1 }}>
                  {form.component !== "RadioGroup" && (
                    <form.component
                      size="small"
                      {...form.otherOptions}
                      disabled={action === "view" ? true : false}
                      InputLabelProps={{
                        shrink: action === "view" ? true : undefined,
                        disabled: action === "view" ? true : undefined,
                      }}
                    >
                      {form.otherOptions.select
                        ? form.options.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  )}
                  {form.component === "RadioGroup" && (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Typography
                        sx={{
                          color: theme.palette.grey[500],
                          fontWeight: theme.typography.fontWeightMedium,
                        }}
                        variant="body1"
                        color="initial"
                      >
                        {form.otherOptions.label}
                      </Typography>
                      <RadioGroup
                        name={form.otherOptions.name}
                        defaultValue={getValues(`${form.otherOptions.name}`)}
                        onChange={(e) => {
                          console.log(form.otherOptions.name);

                          setValue(
                            `${form.otherOptions.name}`,
                            `${e.target.value === "yes" ? true : false}`
                          );
                          trigger(`${form.otherOptions.name}`);
                        }}
                        //  value={getValues(`${form.otherOptions.name}`)}
                        sx={{ display: "flex", flexDirection: "row" }}
                      >
                        {form?.Options?.map((mode: any, index: any) => {
                          return (
                            <Grid key={mode} item>
                              <FormControlLabel
                                label={mode === true ? "yes" : "No"}
                                control={<Radio />}
                                value={mode}
                                disabled={action === "view" ? true : false}
                              />
                            </Grid>
                          );
                        })}
                      </RadioGroup>
                    </Box>
                  )}
                </Box>
              </Grid>
            );
          })}
          {action === "add" || action === "edit" ? (
            <Grid
              xs={12}
              sx={{
                mt: 2,
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
              item
            >
              <Button
                type="submit"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
              >
                Submit
              </Button>
              <Button
                sx={{
                  bgcolor: theme.palette.grey[800],
                  "&:hover": { bgcolor: theme.palette.grey[800] },
                }}
                variant="contained"
                onClick={() =>
                  router.push(
                    "/carer-info/personal-info/carer-chronology-of-events"
                  )
                }
              >
                Save as draft
              </Button>
              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() =>
                  router.push(
                    "/carer-info/personal-info/carer-chronology-of-events"
                  )
                }
              >
                back
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </FormProvider>

      {action === "view" && (
        <Grid container>
          <Grid xs={12} sx={{ mt: 2 }} item>
            <Button
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() =>
                router.push(
                  "/carer-info/personal-info/carer-chronology-of-events"
                )
              }
            >
              back
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default AllegationForm;