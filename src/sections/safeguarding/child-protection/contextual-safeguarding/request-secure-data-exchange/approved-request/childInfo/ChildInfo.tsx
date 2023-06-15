import { Box, Card, Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import NextLink from "next/link";
import ChildInfoTabs from "../child-info-tabs/ChildInfoTabs";
import { TABSDATAARRY } from "../child-info-tabs/index";
import { useTheme } from "@mui/material";
import ChildFamilyRelativesForm from "../child-family-&-relatives/child-family-&-relatives-form/ChildFamilyRelativesForm";

const ChildInfo = () => {
  const theme = useTheme();
  return (
    <Box>
      <ChildInfoTabs tabsDataArray={TABSDATAARRY}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item.index}>
            <Grid container spacing={2} minHeight={"230px"}>
              <Box sx={{ width: "100%" }}>{item.component}</Box>
            </Grid>
          </Fragment>
        ))}
      </ChildInfoTabs>
    </Box>
  );
};

export default ChildInfo;

const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
  cardStyles: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),
  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
  tabsItems: (background: string) => ({
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "5px",
    padding: "30px 0",
    textAlign: "center",
    borderLeft: `10px solid ${background}`,
  }),
  innerTitle: (mode: string) => ({
    color: mode === "light" ? "#343A40" : mode,
    fontSize: "16px",
    fontWeight: mode === "light" ? "500" : "400",
  }),
  profileCardHeading: {},
};
