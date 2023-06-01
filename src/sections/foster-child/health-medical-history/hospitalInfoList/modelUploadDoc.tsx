import {
  Box,
  Grid,
  Button,
  Modal,
  Backdrop,
  Typography,
  useTheme,
  Skeleton,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import TableAction from "@root/components/TableAction";
import { UploadViewDocFormData, formSchemaModel } from ".";

interface model {
  modelOpen?: boolean;
  setModelOpen?: any;
  isloading?: boolean;
  defaultValues?: any;
  action?: string;
  showActions?: boolean;
  onSubmit?: any;
  parentState: boolean;
}
function ModelUploadDoc(props: model) {
  const {
    modelOpen,
    setModelOpen,
    isloading,
    defaultValues,
    action,
    showActions,
    onSubmit,
    parentState,
  } = props;
  const theme: any = useTheme();
  const [Open, setOpen] = useState(false);

  const defaultValuesdef = {
    type: "",
    documentDate: new Date(),
    password: "",
  };
  const methods = useForm({
    resolver: yupResolver(formSchemaModel),
    defaultValues: defaultValues ?? defaultValuesdef,
  });
  const { handleSubmit, getValues } = methods;
  return (
    <Box>
      {showActions && (
        <TableAction
          size="small"
          type={action}
          onClicked={() => {
            setOpen(true);
          }}
        />
      )}
      {action === "add" ? (
        <>
          {modelOpen && (
            <Modal
              open={modelOpen}
              onClose={() => setModelOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Box sx={Styles.root}>
                {isloading === true ? (
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 3,
                      }}
                    >
                      <Typography variant="subtitle1">
                        Person Uploaded: ...
                      </Typography>
                      <CloseIcon
                        onClick={() => setOpen(false)}
                        sx={{ cursor: "pointer" }}
                      />
                    </Box>
                    <Grid container>
                      <Grid xs={12} sm={12} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                      <Grid xs={12} sm={6} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                      <Grid xs={12} sm={6} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                      <Grid xs={12} sm={12} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <Box>
                    <FormProvider
                      methods={methods}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <Typography variant="subtitle1">
                          Person Uploaded: {getValues("uploadBy")}
                        </Typography>
                        <CloseIcon
                          onClick={() => setModelOpen(false)}
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                      <Grid container rowSpacing={4} columnSpacing={2}>
                        {UploadViewDocFormData.map((form: any) => (
                          <Grid
                            item
                            xs={12}
                            md={form?.gridLength}
                            key={form.id}
                          >
                            <form.component
                              {...form.componentProps}
                              disabled={true}
                              InputLabelProps={{
                                shrink: true,
                                disabled: true,
                              }}
                              size="small"
                            >
                              {form.componentProps.select
                                ? form.componentProps.options.map(
                                    (option: any) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    )
                                  )
                                : null}
                            </form.component>
                          </Grid>
                        ))}
                        <Grid xs={12} item>
                          <RHFTextField
                            name="documentName"
                            disabled={true}
                            InputLabelProps={{
                              shrink: true,
                              disabled: true,
                            }}
                            {...methods}
                          />
                        </Grid>
                      </Grid>
                      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                        {action !== "view" && (
                          <Button
                            sx={{
                              bgcolor: theme.palette.primary.main,
                              "&:hover": {
                                bgcolor: theme.palette.primary.main,
                              },
                            }}
                            variant="contained"
                            onClick={() => setOpen(false)}
                          >
                            Submit
                          </Button>
                        )}
                        <Button
                          sx={{
                            bgcolor: theme.palette.orange.main,
                            "&:hover": { bgcolor: theme.palette.orange.main },
                          }}
                          variant="contained"
                          onClick={() => setModelOpen(false)}
                        >
                          Back
                        </Button>
                      </Box>
                    </FormProvider>
                  </Box>
                )}
              </Box>
            </Modal>
          )}
        </>
      ) : (
        <>
          {Open && (
            <Modal
              open={Open}
              onClose={() => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Box sx={Styles.root}>
                {isloading === true ? (
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 3,
                      }}
                    >
                      <Typography variant="subtitle1">
                        Person Uploaded: ...
                      </Typography>
                      <CloseIcon
                        onClick={() => setOpen(false)}
                        sx={{ cursor: "pointer" }}
                      />
                    </Box>
                    <Grid container>
                      <Grid xs={12} sm={12} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                      <Grid xs={12} sm={6} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                      <Grid xs={12} sm={6} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                      <Grid xs={12} sm={12} sx={{ px: 2, py: 1.5 }} item>
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={"100%"}
                          sx={Styles.skeleton(theme)}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <Box>
                    <FormProvider
                      methods={methods}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 3,
                        }}
                      >
                        <Typography variant="subtitle1">
                          Person Uploaded: {getValues("uploadBy")}
                        </Typography>
                        <CloseIcon
                          onClick={() => setOpen(false)}
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                      <Grid container rowSpacing={4} columnSpacing={2}>
                        {UploadViewDocFormData.map((form: any) => (
                          <Grid
                            item
                            xs={12}
                            md={form?.gridLength}
                            key={form.id}
                          >
                            <form.component
                              {...form.componentProps}
                              disabled={true}
                              InputLabelProps={{
                                shrink: true,
                                disabled: true,
                              }}
                              size="small"
                            >
                              {form.componentProps.select
                                ? form.componentProps.options.map(
                                    (option: any) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    )
                                  )
                                : null}
                            </form.component>
                          </Grid>
                        ))}
                        <Grid xs={12} item>
                          <RHFTextField
                            name="documentName"
                            disabled={true}
                            InputLabelProps={{
                              shrink: true,
                              disabled: true,
                            }}
                            {...methods}
                          />
                        </Grid>
                      </Grid>
                      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                        {action !== "view" && (
                          <Button
                            sx={{
                              bgcolor: theme.palette.primary.main,
                              "&:hover": {
                                bgcolor: theme.palette.primary.main,
                              },
                            }}
                            variant="contained"
                            onClick={() => setOpen(false)}
                          >
                            Submit
                          </Button>
                        )}
                        <Button
                          sx={{
                            bgcolor: theme.palette.orange.main,
                            "&:hover": { bgcolor: theme.palette.orange.main },
                          }}
                          variant="contained"
                          onClick={() => {
                            if (setModelOpen) {
                              setModelOpen(false);
                            } else {
                              setOpen(false);
                            }
                          }}
                        >
                          Back
                        </Button>
                      </Box>
                    </FormProvider>
                  </Box>
                )}
              </Box>
            </Modal>
          )}
        </>
      )}
    </Box>
  );
}

export default ModelUploadDoc;
// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "35%" },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  skeleton: (theme: any) => ({
    bgcolor: theme.palette.mode === "light" ? theme.palette.grey[300] : "",
    borderRadius: "4px",
    height: 40,
  }),
};
