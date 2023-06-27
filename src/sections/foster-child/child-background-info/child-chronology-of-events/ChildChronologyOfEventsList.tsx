import CustomAccordian from "@root/components/CustomAccordian";
import { childChronologyListData } from "./ChildChronologyOfEventsData";
import { Box, Button } from "@mui/material";
import { Print } from "@mui/icons-material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ChildChronologyOfEventsList = (props: any) => {
  const { fosterChildId } = props;
  console.log("🚀 ~ file: index.tsx:31 ~ ChildChronologyOfEvents ~ fosterChildId:", fosterChildId);
  const childChronologyListDataArray = childChronologyListData(fosterChildId);
  return (
    <>
      <Box sx={{ display: "flex", gap: "12px", justifyContent: "end" }}>
        <Button variant="contained">
          <ImportExportIcon /> Sort By <ArrowDropDownIcon />
        </Button>
      </Box>
      <CustomAccordian data={childChronologyListDataArray} />
    </>
  );
};

export default ChildChronologyOfEventsList;
