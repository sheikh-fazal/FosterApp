import { useState, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import {
  Stack,
  Grid,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
import { fData } from "../../../utils/formatNumber";
import { fTimestamp } from "../../../utils/formatTime";
// components
import {
  FormProvider,
  RHFTextField,
  RHFCheckbox,
  RHFEditor,
  RHFSelect,
  RHFSwitch,
  RHFRadioGroup,
} from "../../../components/hook-form";
//
import { FormSchema, defaultValues } from ".";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// ----------------------------------------------------------------------

export default function AboutCandidate() {
  const fileInputRef: any = useRef(null);

  const [showPassword, setShowPassword] = useState(false);

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const photo = useWatch({ control, name: "photo" });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickAttachPhoto = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <RHFTextField name="fullName" label="Full Name" />
            <RHFTextField name="email" label="Email address" />
            <RHFTextField name="age" label="Age" type="number" />

            <RHFSelect name="areaOffice" label="Area Office">
              {[1, 2, 3, 4].map((option, i) => {
                return (
                  <option key={i} value={i}>
                    {option}
                  </option>
                );
              })}
            </RHFSelect>

            <RHFRadioGroup
              name="areaOffice2"
              label="Area Office"
              options={[1, 2, 3, 4]}
            ></RHFRadioGroup>
            <RHFCheckbox name="terms" label=" Terms and Conditions" />
            <LoadingButton
              fullWidth
              color="info"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isDirty}
            >
              Submit
            </LoadingButton>
          </Stack>
        </Grid>
        =
      </Grid>
    </FormProvider>
  );
}
