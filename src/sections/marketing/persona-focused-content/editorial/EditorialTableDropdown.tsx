import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const selectList = [
  {
    menuItem: "Brainstorming",
    color: "#93C3EF",
  },
  {
    menuItem: "Researching",
    color: "#8FE0FA",
  },
  {
    menuItem: "Revising",
    color: "#F8ED8F",
  },
  {
    menuItem: "Drafting",
    color: "#FCBEBA",
  },
  {
    menuItem: "Publishing",
    color: "#8FFBAD",
  },
  {
    menuItem: "Promoted",
    color: "#D6ADEA",
  },
];

const DeRegTableDropdown = ({
  status,
  options = selectList,
  handleChange,
}: any) => {
  const [bg, setBg] = useState(
    "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)"
  );
  const [newStatus, setNewStatus] = useState("Brainstorming");

  const handleStatusChange = (data: any) => {
    setNewStatus(data.target.value);
    handleChange(data.target.value);

    switch (data.target.value) {
      case "Brainstorming":
        return setBg("8FE0FA");
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
      default:
        return;
    }
  };

  useEffect(() => {
    switch (status) {
      case "Brainstorming":
        return setBg("8FE0FA");
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
      default:
        return;
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
          sx={{
            background: item.color,
            m: 0.9,
            color: "#fff",
            borderRadius: "4px",
            width: "270px",
          }}
        >
          {item.menuItem}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DeRegTableDropdown;

const styles = {
  select: (background: string) => ({
    height: "30px",
    width: "210px !important",
    textTransform: "capitalize",
    color: "#fff !important",
    fontWeight: 600,
    fontSize: "14px",
    background: background,
    "& .MuiSelect-select": { paddingX: "0 !important" },
    boxShadow: "none",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
    ".MuiSelect-outlined": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px important",
    },
    "& fieldset": { border: "none !important" },
  }),
  menuList: (color: string) => ({}),
};
