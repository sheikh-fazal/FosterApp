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
import {
  UploadDocFormData,
  UploadViewDocFormData,
  formSchemaModel,
} from "../../sections/foster-child/health-medical-history/hospitalInfoList";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { LoadingButton } from "@mui/lab";
import IsFetching from "@root/components/loaders/IsFetching";

interface model {
  modelOpen?: boolean;
  setModelOpen?: any;
  isloading?: boolean;
  defaultValues?: any;
  action?: string;
  showActions?: boolean;
  onSubmit?: any;
  isFetching?: boolean;
  defaultValuesdef?: any;
}
function ModelUploadDoc(props: model) {
  const {
    modelOpen,
    setModelOpen,
    action,
    showActions,
    onSubmit,
    isFetching,
    isloading,
    defaultValuesdef,
  } = props;
  const [Model, setModel] = useState(false);
  return (
    <Box>
      {showActions && (
        <TableAction
          size="small"
          type={action}
          onClicked={() => setModel(true)}
        />
      )}

      <Form
        defaultValuesdef={defaultValuesdef}
        isloading={isloading}
        onSubmit={onSubmit}
        Model={action === "edit" || action === "view" ? Model : modelOpen}
        setModel={
          action === "edit" || action === "view" ? setModel : setModelOpen
        }
        action={action}
        isFetching={isFetching}
      />
    </Box>
  );
}
const Form = (props: any) => {
  const {
    Model,
    setModel,
    defaultValuesdef,
    isloading,
    onSubmit,
    action,
    isFetching,
  } = props;
  const theme: any = useTheme();
  console.log("i am here");
  const methods = useForm({
    resolver: yupResolver(formSchemaModel),
    defaultValues: defaultValuesdef,
  });
  const { handleSubmit, getValues, reset } = methods;

  return (
    <>
      {Model && (
        <Modal
          open={Model}
          onClose={() => {
            setModel(false);
            reset();
          }}
          aria-labelledby="modal-modal-title-fdsfl"
          aria-describedby="modal-modal-description-mkdsfnjs"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Box sx={Styles.root}>
            {isloading && (
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
                    onClick={() => setModel(false)}
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
            )}
            <Box>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <IsFetching isFetching={isFetching} />
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
                    onClick={() => setModel(false)}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <Grid container rowSpacing={4} columnSpacing={2}>
                  {UploadViewDocFormData.map((form: any) => (
                    <Grid item xs={12} md={form?.gridLength} key={form.id}>
                      <form.component
                        {...form.componentProps}
                        disabled={
                          action === "add" || action === "edit" ? false : true
                        }
                        InputLabelProps={{
                          shrink:
                            action === "add" || action === "edit"
                              ? undefined
                              : true,
                          disabled:
                            action === "add" || action === "edit"
                              ? undefined
                              : true,
                        }}
                        size="small"
                      >
                        {form.componentProps.select
                          ? form.componentProps.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          : null}
                      </form.component>
                    </Grid>
                  ))}
                  <Grid xs={12} item>
                    {action === "edit" || action === "add" ? (
                      <RHFUploadFile name="file" {...methods} />
                    ) : (
                      <RHFTextField
                        name="documentName"
                        disabled={true}
                        InputLabelProps={{
                          shrink: true,
                          disabled: true,
                        }}
                        {...methods}
                      />
                    )}
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
                  {action === "edit" || action === "add" ? (
                    <Button
                      type="submit"
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        "&:hover": { bgcolor: theme.palette.orange.main },
                      }}
                      variant="contained"
                    >
                      Upload
                    </Button>
                  ) : null}
                  <Button
                    sx={{
                      bgcolor: theme.palette.orange.main,
                      "&:hover": { bgcolor: theme.palette.orange.main },
                    }}
                    variant="contained"
                    onClick={() => {
                      setModel(false);
                      reset();
                    }}
                  >
                    Back
                  </Button>
                </Box>
              </FormProvider>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

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
