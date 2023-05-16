import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableAction from "@root/components/TableAction";
import { Grid, TextField, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
};

export default function ActionModal(props: any) {
  const theme: any = useTheme();
  const { content, readOnly } = props;
  const selectedRow = content.row.original;
  console.log(content);

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
    handleClose();
    // reset();
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("View", content.row.original);
  };
  const handleClose = () => setOpen(false);
  console.log(theme.palette.orange);

  return (
    <div>
      <TableAction type="view" onClicked={handleOpen} size="small" />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="p"
              mb={3}
            >
              Person Uploaded :{selectedRow.personUploaded}
            </Typography>
            <DocumentModalForm disableForm={readOnly} selectedRow={selectedRow}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.dark },
                }}
                onClick={handleClose}
              >
                {readOnly ? "Close" : "Cancel"}
              </Button>
            </DocumentModalForm>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const DocumentModalForm = (props: any) => {
  const { disableForm, children, selectedRow } = props;
  const theme: any = useTheme();
  //-------------------------------------------//
  const defaultValues = {
    documentType: selectedRow?.documentType,
    documentDate: new Date(
      dayjs(selectedRow?.documentDate).format("MM/DD/YYYY")
    ),
    password: selectedRow?.password,
    chosenFile: { name: selectedRow?.document },
  };
  //-----------------------------------------------//
  const FormSchema = Yup.object().shape({
    documentType: Yup.string().required("Required"), //1
    documentDate: Yup.date().required("Required"), //2
    password: Yup.string().required("Required"), //3
    chosenFile: Yup.mixed().required("Required"), //4
  });

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
    // reset();
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {formData.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <form.component
                {...form.componentProps}
                size="small"
                disabled={disableForm}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} md={12}>
          <RHFUploadFile
            name="chosenFile"
            {...methods}
            disabled={disableForm}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          display={"flex"}
          justifyContent={"space-between"}
        >
          {!disableForm && (
            <Button
              size="small"
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.dark },
              }}
            >
              Submit
            </Button>
          )}
          {children}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export const formData = [
  {
    id: 1,
    componentProps: {
      name: "documentType",
      label: "Document Type",
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "documentDate",
      label: "Document Date",
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "password",
      label: "Password to open document",
    },
  },
];
