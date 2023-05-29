import {
    Box,
    Button,
    Card,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useTheme } from "@emotion/react";
import { NotificationData } from ".";

export default function PanelNotifications() {
    let [expand, setExpand] = useState(false);
    const [notifications, setNotifications] = useState(NotificationData.slice(0, 3));
    const handleExpand = () => {
        setExpand(!expand);
        setNotifications(expand ? NotificationData : NotificationData.slice(0, 3))
    }
    const theme: any = useTheme();

    return (
        <Card
            sx={{
                py: 1.5,
                px: 1,
                boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
                borderRadius: "10px",
            }}
        >
            <Typography
                variant="h6"
                component="h6"
                sx={{ color: theme.palette.primary.main, mb: 1 }}
            >
                Panel Notifications
            </Typography>
            <FormGroup>
                {notifications.map((data: any, i: number) => (
                    <FormControlLabel
                        key={i}
                        control={
                            <Checkbox
                                name={data.name}
                                size="small"
                                onChange={(e) => {
                                    console.log("aa", e.target.checked);
                                }}
                            />
                        }
                        label={data.title}
                    />
                ))}
            </FormGroup>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                }}
            >
                <Button
                    onClick={handleExpand}
                >
                    {!expand ? "less" : "more"}
                    {!expand ? <ExpandLess /> : <ExpandMore />}
                </Button>
            </Box>
        </Card>
    );
}