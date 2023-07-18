// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Box, Chip } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// ----------------------------------------------------------------------
// styles
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option: string, options: any[], theme: Theme) {
  return {
    fontWeight:
      options.findIndex(({ value }: any) => value === option) > -1
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

// ----------------------------------------------------------------------

function ChipWrapper({ selected }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.5,
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      {selected
        .slice(0, 3)
        .map(
          ({
            value,
            label,
            bgColor = "#e4e7eb",
            textColor = "#212b36",
          }: any) => (
            <Chip
              sx={{ backgroundColor: bgColor, color: textColor }}
              key={value}
              label={label}
            />
          )
        )}
      {selected.length > 3 && "......"}
    </Box>
  );
}

// ----------------------------------------------------------------------

export default function RHFMultiSelect({
  name,
  label,
  options,
  ...other
}: any) {
  const { control, setValue } = useFormContext();
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<any[]>) => {
    const {
      target: { value },
    }: any = event;

    let values = [...value];
    const length = values.length;
    const lastItem = values[length - 1];

    // Avoid duplicates
    for (let i = 1; i < length; i++) {
      if (values[i - 1].value === lastItem.value) {
        values = [...values.slice(0, i - 1), ...values.slice(i, length - 1)];
        break;
      }
    }

    setValue(name, values);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id={label + name}>{label}</InputLabel>
          <Select
            {...field}
            {...other}
            id={label}
            labelId={label + name}
            MenuProps={MenuProps}
            multiple
            input={<OutlinedInput id={name} label={label} />}
            renderValue={(selected: any) => {
              return <ChipWrapper selected={selected} />;
            }}
            fullWidth
            onChange={handleChange}
            sx={{
              "& .MuiSelect-select": {
                py: field.value.length > 0 ? 1.2 : 1.65,
              },
            }}
            onClose={() => {
              setTimeout(() => {
                (document.activeElement as HTMLElement).blur();
              }, 0);
            }}
          >
            {options.map(({ value, ...other }: any) => (
              <MenuItem
                key={value}
                value={{ value, ...other }}
                style={getStyles(value, field.value, theme)}
              >
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
