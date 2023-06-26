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
  action?: string;
  showActions?: boolean;
  onSubmit?: any;
  isFetching?: boolean;
  defaultValuesdef?: any;
  defaultValues?: any;
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
    defaultValues,
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

      {action === "edit" || action === "view" ? (
        <>
          {Model && (
            <Modal
              open={Model}
              onClose={() => setModel(false)}
              aria-labelledby="modal-modal-titledsdsd"
              aria-describedby="modal-modal-descriptiondsdsddsds"
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Box sx={Styles.root}>
              
                  <EditViewFrom
                    setModel={setModel}
                    onSubmit={onSubmit}
                    defaultValues={defaultValues}
                    isloading={isloading}
                  />
              
              </Box>
            </Modal>
          )}
        </>
      ) : (
        <AddForm
          open={modelOpen}
          setOpen={setModelOpen}
          isfatching={isFetching}
          onUploadSubmit={onSubmit}
        />
      )}
    </Box>
  );
}
const AddForm = (props: any) => {
  const { open, setOpen, isfatching, onUploadSubmit } = props;
  const theme: any = useTheme();
  const defaultValues = {
    type: "",
    documentDate: new Date(),
    password: "",
  };
  const methods: any = useForm({
    resolver: yupResolver(formSchemaModel),
    defaultValues,
  });
  const { handleSubmit } = methods;
  return (
    <Modal
      open={open}
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="subtitle1">
            Person Uploaded: Name Xname
          </Typography>
          <CloseIcon
            onClick={() => setOpen(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <FormProvider methods={methods} onSubmit={handleSubmit(onUploadSubmit)}>
          <Grid container rowSpacing={4} columnSpacing={2}>
            {UploadDocFormData.map((form: any) => (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <form.component {...form.componentProps} size="small">
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
              <RHFUploadFile name="file" {...methods} />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <LoadingButton
              type="submit"
              sx={{
                bgcolor: theme.palette.primary.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              loading={isfatching}
            >
              Upload
            </LoadingButton>
            <Button
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Clear
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Modal>
  );
};
const EditViewFrom = (props: any) => {
  const { setModel, onSubmit, isloading, defaultValues, Formet } = props;
  const theme: any = useTheme();
  const dfv = {
    type: "",
    documentDate: new Date(),
    password: "",
  };
  const methods = useForm({
    resolver: yupResolver(formSchemaModel),
    defaultValues: defaultValues ?? dfv,
  });

  const { handleSubmit, getValues } = methods;
  if (isloading)
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography variant="subtitle1">Person Uploaded: ...</Typography>
          <CloseIcon
            // onClick={() => setOpen(false)}
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
    );
  return (
    <Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
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
                disabled={true}
                InputLabelProps={{
                  shrink: true,
                  disabled: true,
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
          <Button
            sx={{
              bgcolor: theme.palette.orange.main,
              "&:hover": { bgcolor: theme.palette.orange.main },
            }}
            variant="contained"
            onClick={() => setModel(false)}
          >
            Back
          </Button>
        </Box>
      </FormProvider>
    </Box>
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
