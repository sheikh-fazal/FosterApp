import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableAction from "@root/components/TableAction";
import { Grid, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";

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
export default function BankAccountDetailsForm(props: any) {
  const { content, readOnly, btnType, openModal, closeModal, formData } = props;

  const theme: any = useTheme();
  const [open, setOpen] = React.useState(false);

<<<<<<< HEAD
  let selectedRow = content?.row?.original;
=======
  const selectedRow = content?.row?.original;
>>>>>>> 7b76b21a (#other details bankDetailsForm UI done)

  const handleOpen = () => {
    setOpen(true);
    console.log("View", content?.row?.original);
  };
  const handleClose = () => {
    setOpen(false);
    !readOnly && closeModal(false);
  };

  return (
    <div>
      {btnType && (
        <TableAction type={btnType} onClicked={handleOpen} size="small" />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal || open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal || open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="p"
              mb={3}
            >
              Person Uploaded :{selectedRow?.personUploaded}
            </Typography>
<<<<<<< HEAD
            <FormPiece
=======
            <DocumentModalForm
>>>>>>> 7b76b21a (#other details bankDetailsForm UI done)
              disableForm={readOnly}
              selectedRow={selectedRow}
              formData={formData}
            >
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
<<<<<<< HEAD
            </FormPiece>
=======
            </DocumentModalForm>
>>>>>>> 7b76b21a (#other details bankDetailsForm UI done)
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

<<<<<<< HEAD
const FormPiece = (props: any) => {
=======
const DocumentModalForm = (props: any) => {
>>>>>>> 7b76b21a (#other details bankDetailsForm UI done)
  const { disableForm, children, selectedRow, formData } = props;
  const theme: any = useTheme();
  //-------------------------------------------//
  const defaultValues = {
<<<<<<< HEAD
    accountNumber: selectedRow?.accountNumber || "",
    sortName: selectedRow?.sortName || "",
    nameOfBank: selectedRow?.nameOfBank || "",
    accountName: selectedRow?.accountName || "",
    accountType: selectedRow?.accountType || "gold",
=======
    accountNumber: selectedRow?.accountNumber || "123456",
    sortName: selectedRow?.sortName || "Name sort",
    nameOfBank: selectedRow?.nameOfBank || "HBL",
    accountName: selectedRow?.accountName || "Name of HBL",
    accountType: selectedRow?.accountType || "platinum",
>>>>>>> 7b76b21a (#other details bankDetailsForm UI done)
  };
  //-----------------------------------------------//
  const FormSchema = Yup.object().shape({
    accountNumber: Yup.string().required("Required"), //1
    sortName: Yup.string().required("Required"), //2
    nameOfBank: Yup.string().required("Required"), //3
    accountName: Yup.string().required("Required"), //3
    accountType: Yup.string().required("Required"), //4
  });

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data: any) => {
    // console.log(data, "submitted data");
    formData(data);
    // reset();
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {formDataArray.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <form.component
                {...form.componentProps}
                size="small"
                disabled={disableForm}
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
          );
        })}
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
<<<<<<< HEAD
                bgcolor: theme.palette.primary.main,
                "&:hover": { bgcolor: theme.palette.primary.dark },
=======
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.dark },
>>>>>>> 7b76b21a (#other details bankDetailsForm UI done)
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

export const formDataArray = [
  {
    id: 1,
    componentProps: {
      name: "accountNumber",
      label: "Account Number",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "sortName",
      label: "Sort Name",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "nameOfBank",
      label: "Name OF Bank",
    },
  },
  {
    id: 4,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "accountName",
      label: "Account Name",
    },
  },
  {
    id: 4,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      select: true,
      options: [
        {
          value: "platinum",
          label: "Platinum",
        },
        {
          value: "gold",
          label: "Gold",
        },
        {
          value: "plus",
          label: "Plus",
        },
        {
<<<<<<< HEAD
          value: "Savings",
          label: "Savings",
=======
          value: "standard",
          label: "Standard",
>>>>>>> 7b76b21a (#other details bankDetailsForm UI done)
        },
      ],
      fullWidth: true,
      name: "accountType",
      label: "Account Type",
    },
  },
];
