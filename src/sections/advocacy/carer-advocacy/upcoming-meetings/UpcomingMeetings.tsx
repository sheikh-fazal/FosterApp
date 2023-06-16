import router from "next/router";
import React, { useState } from "react";
import { UpcomingMeetingsData } from ".";
import { useTheme } from "@emotion/react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { Box, Button, Card, FormGroup, ListItemAvatar, Typography } from "@mui/material";

// ============================================================================================

export default function UpcomingMeetings() {
  const theme: any = useTheme();
  let [expand, setExpand] = useState(false);
  const [notifications, setNotifications] = useState(UpcomingMeetingsData.slice(0, 5));
  const handleExpand = () => {
    setExpand(!expand);
    !expand ? setNotifications(UpcomingMeetingsData) : setNotifications(UpcomingMeetingsData.slice(0, 5));
  };

  return (
    <Card sx={styles.card}>
      <Box sx={styles.header}>
        <Typography variant="h6" component="h6" sx={{ color: theme.palette.primary.main, py: 1.5, px: 1.5, fontSize: "18px !important" }}>
          Upcoming Meetings
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{ color: "#23183D", fontSize: "14px !important", cursor: "pointer", py: 1.5, px: 1.5 }}
          onClick={() => {
            router.push("/carer-advocacy/upload-meeting");
          }}
        >
          view all
        </Typography>
      </Box>
      <FormGroup>
        <Box sx={styles?.container}>
          <ul style={styles?.listContainer}>
            {notifications.map((data: any, index: number) => (
              <Box key={index}>
                {data?.title && (
                  <li style={{ display: "flex", alignItems: "baseline" }}>
                    <ListItemAvatar sx={styles?.listItemAvatar("#0E918C")} />
                    <Typography sx={{ fontSize: "16px", fontWeight: 500, paddingBottom: "10px" }} component="p">
                      {data?.title}
                    </Typography>
                  </li>
                )}
              </Box>
            ))}
          </ul>
        </Box>
      </FormGroup>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={handleExpand}>
          {expand ? "less" : "more"}
          {expand ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </Box>
    </Card>
  );
}

// ============================================================================
const styles = {
  container: { display: "flex", justifyContent: "space-between", paddingInline: "20px" },
  listContainer: { width: "100%" },
  nextLinkContainer: { textDecoration: "none", display: "block" },
  listItemAvatar: (background: any) => ({
    background: background,
    width: "13px",
    height: "13px",
    borderRadius: 1,
  }),
  card: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "19.3rem",
  },
  header: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid #0E918C", opacity: "0.5px" },
};
