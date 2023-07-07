import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const EditorialTableDropdown = ({ status, options, handleChange }: any) => {
  console.log("+++++++++", status);
  const [bg, setBg] = useState("");
  const [newStatus, setNewStatus] = useState(status);

  const handleStatusChange = (data: any) => {
    setNewStatus(data.target.value);
    handleChange(data.target.value);

    switch (data.target.value) {
      case "Brainstorming":
        return setBg("#93C3EF");
      case "Researching":
        return setBg("#8FE0FA");
      case "Revising":
        return setBg("#F8ED8F");
      case "Drafting":
        return setBg("#FCBEBA");
      case "Publishing":
        return setBg("#8FFBAD");
      case "Promoted":
        return setBg("#D6ADEA");
      case "Medium":
        return setBg("#8FE0FA");
      case "Guest Blog":
        return setBg("#F8ED8F");
      case "Melisa Davis":
        return setBg("#FEA6A1");
      case "Kelly Rippa":
        return setBg("#93C3EF");
      case "Alvin Terrtown":
        return setBg("#F8ED8F");
      case "Alvin Terrtown":
        return setBg("#8FE0FA");
      default:
        return setBg("#BBD6EF");
    }
  };

  useEffect(() => {
    switch (status) {
      case "Brainstorming":
        return setBg("#93C3EF");
      case "Researching":
        return setBg("#8FE0FA");
      case "Revising":
        return setBg("#F8ED8F");
      case "Drafting":
        return setBg("#FCBEBA");
      case "Publishing":
        return setBg("#8FFBAD");
      case "Promoted":
        return setBg("#D6ADEA");
      case "Medium":
        return setBg("#8FE0FA");
      case "Guest Blog":
        return setBg("#F8ED8F");
      case "Melisa Davis":
        return setBg("#FEA6A1");
      case "Kelly Rippa":
        return setBg("#93C3EF");
      case "Alvin Terrtown":
        return setBg("#F8ED8F");
      case "Alvin Terrtown":
        return setBg("#8FE0FA");
      default:
        return setBg("#BBD6EF");
    }
  }, [status]);

  return (
    <Select
      value={newStatus}
      sx={styles.select(bg)}
      onChange={handleStatusChange}
      inputProps={{ IconComponent: () => null }}
      IconComponent={ArrowDropDownIcon}
    >
      {options.map((item: any, i: number) => (
        <MenuItem
          key={i}
          value={item.menuItem}
          sx={styles.menuList(item.color)}
        >
          {item.menuItem}
        </MenuItem>
      ))}
    </Select>
  );
};

export default EditorialTableDropdown;

const styles = {
  select: (background: string) => ({
    height: "30px",
    // width: "210px !important",
    textTransform: "capitalize",
    color: "#637381 !important",
    padding: "0 25px",
    fontWeight: 600,
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
    background: background,
    "& .MuiSelect-select": { paddingX: "0 !important" },

    boxShadow: "none",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
    ".MuiSelect-outlined": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px important",
    },
    "& fieldset": { border: "none !important" },
  }),
  menuList: (color: string) => ({
    background: color,
    padding: "0 25px",
    color: "1D1D1D",
    borderRadius: "20px",
    margin: "10px auto",
    fontWeight: "400",
    fontSize: "16px",
    width: "min-content",
    textAlign: "center",

    ":hover": {
      background: "none",
      cursor: "pointer",
    },
  }),
};
