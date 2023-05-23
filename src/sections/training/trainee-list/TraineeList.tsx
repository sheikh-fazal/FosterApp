import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import Select from "@mui/material/Select";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PrintIcon from "@mui/icons-material/Print";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CustomAccordian from "@root/components/CustomAccordian";
import TaineeListTable from "./tainee-list-table/TaineeListTable";

const TraineeLists = () => {
  const [items, setitems] = React.useState("");
  const [cancelDelete, setCancelDelete] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleChange = (event: any) => {
    setitems(event.target.value);
  };

  const router = useRouter();

  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortingData = [
    {
      title: "Option 1",
      component: <TaineeListTable/>
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Box>
        <Grid spacing={2} container>
          <Grid item xl={6} lg={6} md={12} xs={12}>
            <FormControl>
              <TextField
                fullWidth
                size="medium"
                name="{searchKey}"
                placeholder="Search"
                value={items}
                onChange={handleChange}
                sx={styles.searchStyles}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xl={6} lg={6} md={12} xs={12}>
            <Stack
              direction={{
                xl: "row",
                lg: "row",
                md: "row",
                xs: "column",
                sm: "column",
              }}
              justifyContent="end"
              spacing={1}
            >
              <Button variant="contained">
                <PrintIcon sx={{ fontSize: "25px" }} />
              </Button>

              <Button
                variant="contained"
                onClick={handleClick}
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                size="large"
              >
                <Stack direction="row" justifyContent="center" spacing={0.5}>
                  <SwapVertIcon />
                  <Box>Sort By</Box>
                  <ArrowDropDownIcon />
                </Stack>
              </Button>
              <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
              <Button size="large" variant="contained">
                Add Group
              </Button>
            </Stack>
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CustomAccordian data={sortingData} showBtn/>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default TraineeLists;

const styles = {
  searchStyles: (theme: any) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
    border: "unset",
    boxShadow: "unset",
    borderRadius: "4px",
  }),
};
