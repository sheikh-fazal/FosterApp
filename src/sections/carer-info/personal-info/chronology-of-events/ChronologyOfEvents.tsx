import * as React from "react";
import { accordionData, sortingData } from "./index";
import { FormControl, Grid, InputLabel, MenuItem, Stack } from "@mui/material";
import Select from "@mui/material/Select";
import AccordianList from "@root/components/AccordianList";

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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sortingData.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Grid container>
        {accordionData.map((item: any) => (
          <Grid item xs={12} key={item.title}>
            <AccordianList title={item.title} component={item.component} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ChronologyOfEvents;
