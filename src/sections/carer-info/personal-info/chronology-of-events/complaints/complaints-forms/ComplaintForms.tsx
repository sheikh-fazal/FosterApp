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
import { complaintsFormData, defaultValues, formSchema } from "./index";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useComplaintsForm } from "./useComplaintsForm";
function ComplaintForms(props: any) {
  //Complaints Custom Hook
  const {
    router,
    theme,
    getComplaintList,
    addComplaints,
    editComplaints,
    setError,
    isLoading,
    setIsLoading,
  } = useComplaintsForm();
  const onSubmit = async (data: any) => {
    if (action === "add") {
      addComplaints(data);
    } else {
      editComplaints(data);
    }
  };
  const { action, id } = props;
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: async () => {
      if (action === "edit" || action === "view") {
        const { data, isError }: any = await getComplaintList(id, true);
        setIsLoading(false);
        if (isError) {
          setError("Something went wrong.");
          return defaultValues;
        }
        return { ...data.data };
      } else {
        setIsLoading(false);
        return defaultValues;
      }
    },
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
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {complaintsFormData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                {form.component !== "RadioGroup" && (
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    disabled={action == "view"}
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
                      onChange={(e) => {
                        setValue(`${form.otherOptions.name}`, e.target.value);
                        trigger(`${form.otherOptions.name}`);
                      }}
                      defaultValue={getValues(`${form.otherOptions.name}`)}
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      {form?.Options?.map((mode: any) => {
                        return (
                          <Grid key={mode} item>
                            <FormControlLabel
                              label={mode === true ? "Yes" : "No"}
                              name={form.otherOptions.name}
                              disabled={action == "view"}
                              control={<Radio />}
                              value={mode}
                            />
                          </Grid>
                        );
                      })}
                    </RadioGroup>
                  </Box>
                )}
              </Grid>
            );
          })}
          {action === "add" || action === "edit" ? (
            <Grid
              xs={12}
              sx={{
                mt: { xs: 0, sm: 2 },
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
export default ComplaintForms;
