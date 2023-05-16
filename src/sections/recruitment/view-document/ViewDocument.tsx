import React from "react";
import RHFUploadFile from "@root/sections/carer-info/personal-info/form-f/components/RHFUploadFile";
import {
  FormSchema,
  defaultValues,
  placementReferenceData,
  menuItems,
} from "./ViewDocumentData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import {
  Box,
  Button,
  Card,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PersonIcon from "@mui/icons-material/Person";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ViewDocument = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;
  const onSubmitHandler = (data: any) => {
    reset();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //Handling Button Dropdown
  const handleMenuItemClick = (items: any) => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ p: 1.5 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: { xs: 1, sm: 2 },
            flexDirection: { xs: "column", sm: "row" },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Button
            variant="contained"
            startIcon={<PersonIcon />}
            sx={{
              backgroundColor: theme.palette.grey[600],
              py: 1,
              "&:hover": {
                backgroundColor: theme.palette.grey[600],
              },
            }}
          >
            Carer Details
          </Button>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<EnhancedEncryptionIcon />}
            variant="contained"
            endIcon={<ArrowDropDownIcon />}
            sx={{ py: 1 }}
          >
            Manage Login
          </Button>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {menuItems.map((item: any) => (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              sx={{
                backgroundColor: `${item.bgColor}`,
                m: 0.7,
                color: theme.palette.grey[0],
                borderRadius: "4px",
                fontSize: "14px",
                "&:hover": { backgroundColor: `${item.bgColor}` },
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.grey[600], mb: 2 }}
        >
          Foster Carer Placement Preference
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 4 }}
          columnSpacing={5}
          justifyContent="center"
        >
          {placementReferenceData.map((form: any) => (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              {form.id === 1 && (
                <Grid item xs={12} md={6} sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.grey[600] }}
                  >
                    Upload Video / Audio Recording of your Placement Preference
                  </Typography>
                  <RHFUploadFile name="uploadPhoto" {...methods} />
                </Grid>
              )}
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], mb: 1 }}
              >
                {form?.title}
              </Typography>
              {form.id !== 7.5 && (
                <form.component
                  size="small"
                  {...form.otherOptions}
                  sx={{ color: theme.palette.grey[600] }}
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
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <LoadingButton
            color="primary"
            size="medium"
            type="submit"
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Box>
      </FormProvider>
    </Card>
  );
};

export default ViewDocument;
