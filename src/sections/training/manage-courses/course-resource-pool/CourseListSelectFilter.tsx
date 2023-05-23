import React, { forwardRef, useState, useImperativeHandle } from "react";
import {
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Variables
let timer: any;
const SELECT_FILTERS = [
  {
    key: "SelectCategory",
    label: "Select Category",
    options: [
      { label: "Current Referral", value: "currentReferral" },
      { label: "Onhold", value: "onHold" },
      { label: "Rejected", value: "rejected" },
    ],
  },
  {
    key: "SelectCourse",
    label: "Select Course",
    options: [
      { label: "Foster Carer", value: "fosterCarer" },
      { label: "Foster Child", value: "fosterChild" },
      { label: "Social Worker", value: "socialWorker" },
      { label: "Other", value: "other" },
    ],
  },
];

const getDefaultParams = ({ searchKey, SELECT_FILTERS }: any) => {
  const defaultParams: any = { [searchKey]: "" };
  SELECT_FILTERS.forEach(({ key }: any) => {
    defaultParams[key] = "";
  });
  return defaultParams;
};
const CourseListSelectFilter = forwardRef(function TableHeader(
  {
    searchLabel = "Search",
    searchKey = "search",
    showSelectFilters = false,
    selectSize = "small",
    searchSize = "small",
    debounceTimeout = 500,
    disabled = false,
    onChanged = () => {},
  }: any,
  ref
) {
  const [params, setParams] = useState<any>(
    getDefaultParams({ searchKey, SELECT_FILTERS })
  );
  // Add the functions to the ref
  useImperativeHandle(ref, () => {
    return {
      onCleared() {
        onClear();
      },
    };
  });

  function changeHandler({ target: { name, value } }: any) {
    if (disabled) return;

    setParams((oldParams: any) => {
      const updatedParams = { ...oldParams, [name]: value };

      // Pass filled values to the callback
      let filteredParams: any = {};
      for (let param in updatedParams) {
        const paramValue = updatedParams[param];
        if (paramValue.trim() !== "" || param === searchKey)
          filteredParams[param] = paramValue;
      }

      // Use debounce if search is updated
      if (name === searchKey) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          onChanged(filteredParams);
        }, debounceTimeout);
      } else {
        onChanged(filteredParams);
      }

      return updatedParams;
    });
  }

  function onClear() {
    const defaultParams = getDefaultParams({ searchKey, SELECT_FILTERS });
    setParams(defaultParams);
    onChanged({});
  }
  return (
    <>
      <Typography
        sx={styles.title()}
      >
        Course List
      </Typography>
      <Stack sx={styles.rootBoxStyles}>
        <Stack
          sx={(theme) => styles.headerStackStyles({ theme, showSelectFilters })}
        >
          <TextField
            disabled={disabled}
            size={searchSize}
            name={searchKey}
            placeholder={searchLabel}
            value={params[searchKey]}
            onChange={changeHandler}
            sx={styles.searchStyles}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        {/* Title and Searchbar */}
        {showSelectFilters && (
          <Stack sx={styles.selectStackStyles}>
            {SELECT_FILTERS.map(({ key, label, options = [] }: any) => (
              <TextField
                disabled={disabled}
                select
                size={selectSize}
                key={key}
                name={key}
                label={label}
                value={params[key]}
                onChange={changeHandler}
                sx={styles.selectFieldStyles}
              >
                {options.map(({ label, value }: any) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
            ))}
          </Stack>
        )}
      </Stack>
    </>
  );
});

export default CourseListSelectFilter;

// ------------------------------------------------

// Styles

const styles = {
  rootBoxStyles: (theme: any) => ({
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    padding: theme.spacing(1, 1.8),
    alignItems: "center",
    // gap changing
    gap: theme.spacing(0.5),
    borderRadius: `8px 8px 0 0`,
  }),
  headerStackStyles: ({ theme, showAddBtn, showSelectFilters }: any) => ({
    color: theme.palette.common.white,
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    ...(!showSelectFilters && { width: "100%" }),
    ...(showSelectFilters && {
      marginRight: { xs: 0, sm: "auto" },
    }),
  }),
  searchStyles: (theme: any) => ({
    width: { xs: "100%", sm: "auto" },
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
    border: "unset",
    boxShadow: "unset",
    borderRadius: "4px",
  }),
  selectStackStyles: (theme: any) => ({
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing(),
    width: { xs: "100%", sm: "auto" },
  }),
  selectFieldStyles: (theme: any) => ({
    width: { xs: "100%", sm: "min(100vw, 200px)" },
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
    borderRadius: "4px",
  }),
  title:()=>({
    fontSize:"16px",
    fontWeight:600,
    color: (theme: any) => theme.palette.primary.main,
  })
};
