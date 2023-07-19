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
} from "../../../components/hook-form";
//
import { FormSchema, defaultValues } from ".";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

//mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";

// ----------------------------------------------------------------------
// Constants
const CATEGORY_OPTION = [
  { group: "Clothing", classify: ["Shirts", "T-shirts", "Jeans", "Leather"] },
  {
    group: "Tailored",
    classify: ["Suits", "Blazers", "Trousers", "Waistcoats"],
  },
  {
    group: "Accessories",
    classify: ["Shoes", "Backpacks and bags", "Bracelets", "Face masks"],
  },
];
// ----------------------------------------------------------------------

export default function ReactHookForm() {
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
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(
      JSON.stringify(
        {
          ...data,
          photo: data.photo?.name,
          startDate: data.startDate && fTimestamp(data.startDate),
          endDate: data.endDate && fTimestamp(data.endDate),
        },
        null,
        2
      )
    );
    reset();
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

            <Stack
              spacing={{ xs: 2, sm: 3 }}
              direction={{ xs: "column", sm: "row" }}
            >
              <RHFDatePicker name="startDate" label="Start Date" />
              <RHFDatePicker name="endDate" label="End Date" />
            </Stack>

            <Stack
              spacing={{ xs: 2, sm: 3 }}
              direction={{ xs: "column", sm: "row" }}
            >
              <RHFTimePicker name="startTime" label="Start Time" />
              <RHFTimePicker name="endTime" label="End Time" />
            </Stack>

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={passwordEndAdornment}
            />

            <RHFTextField
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              InputProps={passwordEndAdornment}
            />
            <RHFSelect name="category" label="Category">
              {CATEGORY_OPTION.map((category) => (
                <optgroup key={category.group} label={category.group}>
                  {category.classify.map((classify) => (
                    <option key={classify} value={classify}>
                      {classify}
                    </option>
                  ))}
                </optgroup>
              ))}
            </RHFSelect>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <RHFEditor name="editor" />

          <Stack spacing={3} sx={{ marginTop: 3 }}>
            <div>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Button
                  color="warning"
                  variant="contained"
                  onClick={handleClickAttachPhoto}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload photo
                </Button>

                <div>
                  {photo?.name && (
                    <Typography variant="subtitle2">{photo.name}</Typography>
                  )}
                  {photo?.size && (
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {fData(photo.size)}
                    </Typography>
                  )}
                </div>

                <input
                  {...register("photo")}
                  ref={fileInputRef}
                  type="file"
                  onChange={(event) => {
                    const file: any = event.target.files?.[0];
                    setValue("photo", file);
                  }}
                  style={{ display: "none" }}
                />
              </Stack>

              {errors.photo && (
                <FormHelperText sx={{ px: 2, display: "block" }} error>
                  {errors.photo.message}
                </FormHelperText>
              )}
            </div>

            <div>
              <RHFCheckbox name="terms" label=" Terms and Conditions" />

              {errors.terms && (
                <FormHelperText sx={{ px: 2 }} error>
                  {errors.terms.message}
                </FormHelperText>
              )}
            </div>

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
      </Grid>
    </FormProvider>
  );
}
