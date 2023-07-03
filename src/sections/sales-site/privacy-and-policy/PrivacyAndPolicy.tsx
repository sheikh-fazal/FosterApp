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
import Link from "next/link";

const PrivacyAndPolicy = () => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={2} sx={{ position: "relative" }}>
          <Grid item xs={12} lg={12} sx={styles.mainGrid}>
            {listItems.map((item: any) => (
              <Link
                href={`${item.link}`}
                key={item.id}
                style={{
                  color: theme.palette.grey[700],
                  scrollBehavior: "smooth",
                  transition: "all 0.5s ease-out",
                }}
              >
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
              </Link>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={10}>
          <Card
            sx={{ p: { xs: 2, sm: 3 }, height: "100vh", overflowY: "auto" }}
          >
            <Typography variant="h3" sx={styles.mainTitle}>
              Privacy Policy
            </Typography>
            <Box id="introduction">
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
                Welcome to FosterApp privacy notice. FosterApp respects your
                privacy and is committed to protecting your personal data. This
                privacy notice will inform you as to how we look after your
                personal data that you supply to us and tell you about your
                privacy rights and how the law protects you. This privacy notice
                is laid out under manageable sections to make it easier to
                digest and allow you to find specific information quickly. We
                have also included a Glossary to explain the meaning of some of
                the terms used in this privacy notice.
              </Typography>
              {introPoints.map((item: any) => (
                <List key={item.id}>
                  <ListItem disablePadding sx={styles.listItemStyling}>
                    <ListItemIcon sx={styles.listItemIcon}>
                      <Box sx={styles.listStyling}></Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">{item.title}</Typography>
                      }
                    />
                  </ListItem>
                </List>
              ))}
            </Box>
            <Box id="who-we-are">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                }}
              >
                1. Important information and{" "}
                <Typography
                  variant="h4"
                  component="span"
                  sx={styles.spanTitles}
                >
                  who we are
                </Typography>
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Purpose of this Privacy Notice
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={styles.paragraphStyling}
              >
                This privacy notice aims to give you information on how
                FosterApp collects and processes your personal data. It is
                important that you read this privacy notics so that you are
                fully aware of how and why we are using your data.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Controller
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={styles.paragraphStyling}
              >
                FosterApp is the controller and responsible for your personal
                data (collectively referred to as FosterApp, "we", "us", or
                "our" in this privacy notice). We have a Data Protection Oficer
                who is responsible for overseeing questions in relation to this
                privacy notice. If you have any questions about this privacy
                notice, including any requests to exercise your legal rights,
                please contact us using the details set out below.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Contact Details
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={styles.paragraphStyling}
              >
                Phone Number: (+44) - 750028 - 7504
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={styles.paragraphStyling}
              >
                Email address for our DPO:{" "}
                <strong>contact-us@fosterapp.co.uk</strong>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={styles.paragraphStyling}
              >
                Postal Address: 77, Spaces Healthrow Airport, 4 Roundwood
                Avenue, Stockley Park, Uxbridge, UB11 1AF, United Kingdom.{" "}
                <br /> <br /> You have the right to make a complaint at any time
                to the Information Commissioner’s Office (ICO), the UK
                supervisory authority for data protection issues{" "}
                <strong>(www.ico.org.uk)</strong>. We would, however, appreciate
                the chance to deal with your concerns before you approach the
                ICO, so please contact us in the first instance.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Changes to the privacy notice and your duty to inform us of
                changes
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={styles.paragraphStyling}
              >
                This version was last updated in September 2021. <br /> <br />
                It is important that the personal data we hold about you is
                accurate and current. Please keep us informed if your personal
                data changes during your relationship with us.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Third Party Links
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={styles.paragraphStyling}
              >
                This website may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                website, we encourage you to read the privacy notice of every
                website you visit.
              </Typography>
            </Box>
            {/* Data we collect section started */}
            <Box id="about-us">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                }}
              >
                2. The data we collect about us
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                }}
              >
                1. Important information and{" "}
                <Typography
                  variant="h4"
                  component="span"
                  sx={styles.spanTitles}
                >
                  who we are
                </Typography>
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Purpose of this Privacy Notice
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ lineHeight: "30px" }}
              >
                This privacy notice aims to give you information on how
                FosterApp collects and processes your personal data. It is
                important that you read this privacy notics so that you are
                fully aware of how and why we are using your data.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Controller
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ lineHeight: "30px" }}
              >
                FosterApp is the controller and responsible for your personal
                data (collectively referred to as FosterApp, "we", "us", or
                "our" in this privacy notice). We have a Data Protection Oficer
                who is responsible for overseeing questions in relation to this
                privacy notice. If you have any questions about this privacy
                notice, including any requests to exercise your legal rights,
                please contact us using the details set out below.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Contact Details
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ lineHeight: "30px" }}
              >
                Phone Number: (+44) - 750028 - 7504
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ lineHeight: "30px" }}
              >
                Email address for our DPO:{" "}
                <strong>contact-us@fosterapp.co.uk</strong>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ lineHeight: "30px" }}
              >
                Postal Address: 77, Spaces Healthrow Airport, 4 Roundwood
                Avenue, Stockley Park, Uxbridge, UB11 1AF, United Kingdom.{" "}
                <br /> <br /> You have the right to make a complaint at any time
                to the Information Commissioner’s Office (ICO), the UK
                supervisory authority for data protection issues{" "}
                <strong>(www.ico.org.uk)</strong>. We would, however, appreciate
                the chance to deal with your concerns before you approach the
                ICO, so please contact us in the first instance.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Changes to the privacy notice and your duty to inform us of
                changes
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ lineHeight: "30px" }}
              >
                This version was last updated in September 2021. <br /> <br />
                It is important that the personal data we hold about you is
                accurate and current. Please keep us informed if your personal
                data changes during your relationship with us.
              </Typography>
              <Typography variant="subtitle2" sx={styles.subTitles}>
                Third Party Links
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ lineHeight: "30px" }}
              >
                This website may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                website, we encourage you to read the privacy notice of every
                website you visit.
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrivacyAndPolicy;

const styles: any = {
  mainWrapper: {
    px: { xs: 1, sm: 5, md: 3, lg: 10 },
    mb: { xs: 5, sm: 10 },
    mt: { xs: 4, sm: 5, lg: 8 },
  },
  mainTitle: (theme: any) => ({
    background: `linear-gradient(to right, ${theme.palette.primary.darker}, ${theme.palette.primary.light})`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    display: "inline-block",
    fontWeight: 700,
  }),
  mainGrid: {
    mb: { xs: 3, md: 0 },
    position: "sticky",
    top: "10%",
    left: "8%",
    zIndex: 112,
  },
  listItemStyling: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemIcon: {
    minWidth: "unset",
    marginRight: "3px",
  },
  spanTitles: (theme: any) => ({
    background: `linear-gradient(to right, ${theme.palette.primary.darker}, ${theme.palette.primary.light})`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    display: "inline-block",
  }),
  listStyling: (theme: any) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    mr: 1,
  }),
  subTitles: (theme: any) => ({
    color: theme.palette.primary.main,
    mt: 2,
    mb: 1,
    textDecoration: "underline",
  }),
  paragraphStyling: {
    lineHeight: "30px",
  },
};
