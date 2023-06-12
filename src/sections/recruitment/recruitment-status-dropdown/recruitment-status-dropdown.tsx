import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRecruitmentStatusDropdown } from "./useRecruitmentStatusDropdown";
export const RecruitmentStatusDropdown = (props: any) => {
  const { id, status, point, selectedObj, component, patchData } = props;
  // console.log(id, status, point);

  const {
    // options,
    open,
    setOpen,
    anchorRef,
    handleMenuItemClick,
    handleClose,
    // optionsColor,
    selectedIndex,
    // setSelectedIndex,
    optionData,
  } = useRecruitmentStatusDropdown({
    id,
    status,
    point,
    selectedObj,
    component,
    patchData,
  });
  return (
    <>
      <Grid
        item
        xs={2.3}
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ButtonGroup variant="contained" ref={anchorRef}>
          <Button
            sx={{
              background: optionData[selectedIndex]?.bgColor,
              width: 200,
              border: 0,
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {/* {options[selectedIndex]} */}
            {optionData[selectedIndex]?.text}
            <ArrowDropDownIcon />
          </Button>
          {/* <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            sx={{ background: optionData[selectedIndex]?.bgColor, border: 0 }}
          >
            <ArrowDropDownIcon />
          </Button> */}
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{
                      boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
                    }}
                    id="split-button-menu"
                    autoFocusItem
                  >
                    {optionData.map((option: any, index: any) => (
                      <MenuItem
                        // sx={menuStyle(selectedIndex, optionsColor)}
                        sx={{
                          background: option.bgColor,
                          color: "white",
                          width: 190,
                          fontSize: 14,
                          margin: 0.8,
                          fontWeight: 600,
                          borderRadius: 1,
                        }}
                        key={option?.id}
                        // selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option?.text}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </>
  );
};
const menuStyle = (selectedIndex: any, option: any) => {
  return {
    background: option.bgColor,
    color: "white",
    width: 190,
    fontSize: 14,
    margin: 0.8,
    fontWeight: 600,
    borderRadius: 1,
  };
};
