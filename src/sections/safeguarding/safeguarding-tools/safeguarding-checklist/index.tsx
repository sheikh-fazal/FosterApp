import React from "react";
import { Button, Menu, MenuItem, Stack } from "@mui/material";
import CustomAccordian from "@root/components/CustomAccordian";
import {
  carerTypeData,
  safeGuardingCheckListData,
} from "./SafeguardingCheckListData";
import Image from "next/image";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PrinIcon from './../../../../assets/svg/safeguarding/PrintIcon.svg'
import ShareIcon from './../../../../assets/svg/safeguarding/ShareIcon.svg'
const SafeguardingCheckList = () => {
  const [carerType, setCarerType] = React.useState<null | HTMLElement>(null);
  const open = Boolean(carerType);
  const handleCarerType = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCarerType(event.currentTarget);
  };
  //Handling Button Dropdown
  const carerTypeMenuItemClick = (items: any) => {
    setCarerType(null);
  };
 
 
 
  return (
    <>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="end"
      gap={2}
    >
      {/* Sort By Dropdown */}
      <Button  id="basic-button"  variant="contained"><Image src={PrinIcon} alt="PrinIcon"/></Button>
      <Button  id="basic-button"  variant="contained"><Image src={ShareIcon} alt="ShareIcon"/></Button>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleCarerType}
        startIcon={<SwapVertIcon />}
        variant="contained"
        endIcon={<ArrowDropDownIcon />}
        sx={{ px: 1 }}
      >
       Sort By
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={carerType}
        open={open}
        onClose={() => setCarerType(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {carerTypeData.map((item: any) => (
          <MenuItem
            key={item.id}
            onClick={() => carerTypeMenuItemClick(item)}
            sx={{
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            {item.value}
          </MenuItem>
        ))}
      </Menu>
      
    </Stack>
    {/* Using Global Accordian */}
    <CustomAccordian data={safeGuardingCheckListData} />
  </>
  )
}

export default SafeguardingCheckList
