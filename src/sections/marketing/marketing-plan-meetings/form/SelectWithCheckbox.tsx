import { useFormContext, Controller } from "react-hook-form";
import {
  Checkbox,
  FormHelperText,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function RHFSelectWithCheckbox({
  name,
  children,
  options,
  ...other
}: any) {
  const { control } = useFormContext();
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  const handleOptionChange = (event: any) => {
    const { value } = event.target;
    setSelectedOptions(value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...field}
          multiple
          value={selectedOptions}
          onChange={handleOptionChange}
          renderValue={(selected: any) => selected.join(", ")}
          error={!!error}
          {...other}
        >
          {options.map((option: any) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selectedOptions.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </Select>
      )}
    />
  );
}
