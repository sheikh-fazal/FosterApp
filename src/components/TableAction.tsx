import { IconButton, darken } from "@mui/material";

// @mui icons
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";

// ----------------------------------------------------------------------

const TableAction = ({
  type = "edit",
  onClicked = () => {},
  ...other
}: any) => {
  return (
    <IconButton
      onClick={onClicked}
      sx={(theme) => styles.btnStyle(theme, type)}
      {...other}
      size="small"
    >
      {icons[type]}
    </IconButton>
  );
};

export default TableAction;

// ----------------------------------------------------------------------
// Styles
const styles = {
  btnStyle: (theme: any, type: string) => {
    let backgroundColor = theme.palette.grey[500];

    switch (type) {
      case "add":
        backgroundColor = theme.palette.orange.main;
        break;
      case "delete":
        backgroundColor = theme.palette.error.main;
        break;
      case "view":
        backgroundColor = theme.palette.primary.main;
        break;
      case "download":
        backgroundColor = theme.palette.success.dark;
        break;
    }
    return {
      backgroundColor,
      ":hover": {
        backgroundColor: darken(backgroundColor, 0.15),
      },
    };
  },
  iconStyles: (theme: any, iconColor: string) => ({
    color: iconColor,
  }),
};

// ----------------------------------------------------------------------
// Icons Object
const icons: any = {
  edit: (
    <ModeEditIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  add: (
    <AddIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  delete: (
    <DeleteIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  view: (
    <VisibilityIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  download: (
    <DownloadIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
};
