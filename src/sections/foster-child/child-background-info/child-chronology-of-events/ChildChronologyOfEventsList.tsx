import CustomAccordian from "@root/components/CustomAccordian";
import { childChronologyListData } from "./ChildChronologyOfEventsData";
import { Box, Button } from "@mui/material";
import { Print } from "@mui/icons-material";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ChildChronologyOfEventsList = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "12px" ,justifyContent:'end'}}>
        <Button variant="contained">
          <Print />
        </Button>
        <Button variant="contained">
          <OpenInNewIcon />
        </Button>
        <Button variant="contained">
          <ImportExportIcon />  Sort By <ArrowDropDownIcon/>
        </Button>
      </Box>
      <CustomAccordian data={childChronologyListData} />
    </>
  );
};

export default ChildChronologyOfEventsList;
