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
  const { id, status, point } = props;
  // console.log(id, status, point);
  
  const {
    options,
    open,
    setOpen,
    anchorRef,
    handleMenuItemClick,
    handleClose,
    optionsColor,
  } = useRecruitmentStatusDropdown({id, status, point});
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
              background: optionsColor[status],
              width: 150,
              fontSize: 14,
              fontWeight: 600,
            }}
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {status}
          </Button>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            sx={{ background: optionsColor[status] }}
          >
            <ArrowDropDownIcon />
          </Button>
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
                    {options.map((option: any, index: any) => (
                      <MenuItem
                        sx={menuStyle(option, optionsColor)}
                        key={index}
                        selected={option === status}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
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
const menuStyle = (option: any, optionsColor: any) => {
  return {
    background: optionsColor[option],
    color: "white",
    width: 190,
    fontSize: 14,
    margin: 0.8,
    fontWeight: 600,
    borderRadius: 1,
  };
};
