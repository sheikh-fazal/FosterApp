import * as React from "react";
import { accordionData, sortingData } from "./ChronologyOfEventsData";
import { FormControl, Grid, InputLabel, MenuItem, Stack } from "@mui/material";
import Select from "@mui/material/Select";
import CustomAccordian from "@root/components/CustomAccordian";

const ChronologyOfEvents = () => {
  const [items, setitems] = React.useState("");
  const handleChange = (event: any) => {
    setitems(event.target.value);
  };
  return (
    <>
      <Stack direction="row" justifyContent="end">
        <FormControl sx={{ width: 130 }}>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            size="medium"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={items}
            label="Sort"
            onChange={handleChange}
          >
            {sortingData.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      {/* Using Global Accordian */}
      <CustomAccordian data={accordionData} />
    </>
  );
};

export default ChronologyOfEvents;
