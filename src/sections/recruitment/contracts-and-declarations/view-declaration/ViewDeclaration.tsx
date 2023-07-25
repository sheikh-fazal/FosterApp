import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  Grid,
  useTheme,
  styled,
  Typography,
  Button,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  RHFSwitch,
  FormProvider,
  RHFRadioGroup,
  RHFTextField,
} from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { defaultValues, FormSchema, viewDeclarationData } from ".";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

export const ViewDeclaration = () => {
  const theme = useTheme();
  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    marginBottom: 10,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "silver",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      //   backgroundColor: theme.palette.primary,
    },
  }));
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Card>
        <Grid container p={1}>
          <Grid p={2} container direction={"column"} item md={7} xs={12}>
            <span
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: theme?.palette?.primary?.main,
              }}
            >
              Susan Smith
            </span>
            <span style={{ margin: "10px 0px 10px 0px" }}>
              Here you can see the progress of Madiha Iffat ‘s application.
            </span>
            <BorderLinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid
            item
            md={10}
            xs={12}
            sx={{ borderBottom: "1px solid", width: "100%" }}
          ></Grid>
          <Grid container alignItems={"center"} p={1} my={1}>
            <Grid item md={3} xs={11}>
              <Button variant="contained" sx={{ backgroundColor: "#F06533" }}>
                Activation & Settings
              </Button>
            </Grid>
            <Grid item md={3} xs={11}>
              <span style={{ fontWeight: 600 }}>User Status</span>:{" "}
              <span>Active</span>
            </Grid>
            <Grid item md={3} xs={11}>
              <span style={{ fontWeight: 600 }}>User Type</span>:{" "}
              <span>Prospective Foster Carer</span>
            </Grid>
          </Grid>
          <Grid
            item
            md={10}
            xs={12}
            sx={{ borderBottom: "1px solid", width: "100%" }}
          ></Grid>
          <Grid container item md={9.5} xs={12} p={1} my={1}>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: theme?.palette?.primary?.main,
              }}
            >
              DECLARATION
            </span>
            <p>
              The following declaration ststements are asked to candidates.
              <br /> <br />
              The information in this application form is true and complete, I
              agree that any deliberate omision, Falsification or
              mmisrepresentation in the application form will be grounds for
              rejecting this appliacation or subsequent dismissal if employed by
              the Oraganisation. Where applicable, I consent that the
              Organisation can seek clarification regarding professional
              registration details.
            </p>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <RHFSwitch
                name="agreeToAboveDeclaration"
                label="I agree to the above Declaration"
              />
              {viewDeclarationData?.map((ele: any) => {
                return (
                  <Accordion sx={{ border: "1px solid", my: 2 }} key={ele?.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <span style={{ fontWeight: 500, fontSize: 18 }}>
                        {ele?.accordianName}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      {ele?.heading && <span>{ele?.heading}</span>} <br />{" "}
                      <br />
                      {ele?.heading2 && <span>{ele?.heading2}</span>}
                      {ele?.component === RHFRadioGroupWithLabel && (
                        <Grid container>
                          <RHFRadioGroup
                            name={ele?.otherOptions?.name}
                            options={ele?.otherOptions?.options}
                          />
                        </Grid>
                      )}
                      {ele?.textfield && (
                        <Grid container item md={6} xs={12}>
                          <RHFTextField
                            minRows={ele?.textfield?.componentProps?.minRows}
                            name={ele?.textfield?.componentProps?.name}
                            label={ele?.textfield?.componentProps?.label}
                            fullWidth={
                              ele?.textfield?.componentProps?.fullWidth
                            }
                            multiline
                          />
                        </Grid>
                      )}
                      {ele?.component === RHFSwitch && (
                        <Grid container>
                          <RHFSwitch
                            name={ele?.otherOptions?.name}
                            label={ele?.otherOptions?.label}
                          />
                        </Grid>
                      )}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
              <button type="submit">132</button>
            </FormProvider>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
