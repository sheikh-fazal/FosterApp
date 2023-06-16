import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { listItems, introPoints } from "./index";
import React from "react";

const PrivacyPolicySection = () => {
  const theme: any = useTheme();
  return (
    <Box sx={{ px: { xs: 1, sm: 5, lg: 10 }, mb: { xs: 5, sm: 10 } }}>
      <Grid container>
        <Grid item xs={12} md={2} sx={{ mb: { xs: 3, md: 0 } }}>
          {listItems.map((item: any) => (
            <List
              sx={{
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                p: 0,
              }}
            >
              <ListItem sx={{ p: "0 0 15px 20px" }}>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle2"
                      sx={{
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          ))}
        </Grid>
        <Grid item xs={12} md={10}>
          <Card sx={{ p: 3, height: "100vh", overflowY: "auto" }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.grey[800],
                mt: 4,
              }}
            >
              Introduction
            </Typography>
            <Typography
              component="p"
              variant="body2"
              sx={{
                color: theme.palette.grey[800],
                mt: 2,
                lineHeight: "30px",
                mb: 2,
              }}
            >
              Welcome to FosterApp privacy notice. <br /> FosterApp respects
              your privacy and is committed to protecting your personal data.
              This privacy notice will inform you as to how we look after your
              personal data that you supply to us and tell you about your
              privacy rights and how the law protects you. <br /> This privacy
              notice is laid out under manageable sections to make it easier to
              digest and allow you to find specific information quickly. We have
              also included a Glossary to explain the meaning of some of the
              terms used in this privacy notice.
            </Typography>
            {introPoints.map((item: any) => (
              <List>
                <ListItem disablePadding>
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: theme.palette.primary.main,
                      mr: 1,
                    }}
                  ></Box>
                  <ListItemText
                    primary={
                      <Typography variant="body2">{item.title}</Typography>
                    }
                  />
                </ListItem>
              </List>
            ))}
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.grey[800],
                mt: 4,
              }}
            >
              1. Important information and{" "}
              <span style={{ color: theme.palette.primary.main }}>
                who we are
              </span>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.primary.main,
                mt: 2,
                mb: 2,
              }}
            >
              Purpose of this Privacy Notice
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ lineHeight: "30px" }}
            >
              This privacy notice aims to give you information on how FosterApp
              collects and processes your personal data. <br /> It is important
              that you read this privacy notics so that you are fully aware of
              how and why we are using your data.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.primary.main,
                mt: 2,
                mb: 2,
              }}
            >
              Controller
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrivacyPolicySection;
