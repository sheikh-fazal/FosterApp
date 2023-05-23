import Layout from "@root/layouts";
import React, { Fragment } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PanelTab from "@root/sections/panel/panel-tab/PanelTab";
import { PANELTABSDATAARRY } from "@root/sections/panel/panel-tab";
import { Card, Grid, Typography, useTheme } from "@mui/material";
import NextLink from "next/link";
import PanelNotifications from "@root/sections/panel/panel-notifications/PanelNotifications";
import PanelMember from "@root/sections/panel/panel-member/PanelMember";
import PanelDashboardCalendar from '@root/sections/panel/panel-calendar/PanelDashboardCalendar';

const PAGE_TILE = "View Panel Dashboard";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Panel",
          href: "/",
        },
        {
          name: "Panel Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <PanelTab tabsDataArray={PANELTABSDATAARRY}>
        {PANELTABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            <Grid
              container
              spacing={2}
              minHeight={"140px"}
              alignItems={"center"}
            >
              {item?.innerDataArray?.map((innerItem, index) => (
                <Grid item key={index} xl={3} lg={4} md={6} xs={12}>
                  <NextLink
                    href={innerItem?.link}
                    style={styles?.nextLinkContainer}
                  >
                    <Card
                      sx={styles.tabsItems(item?.background)}
                      key={innerItem?.id}
                    >
                      <Typography
                        sx={styles.innerTitle(item?.title, theme.palette.mode)}
                      >
                        {innerItem?.title}
                      </Typography>
                    </Card>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </PanelTab>
      <Grid container spacing={2}>
        <Grid item md={5} xs={12}>
          <PanelDashboardCalendar />
        </Grid>
        <Grid
          item
          md={7}
          xs={12}
          gap={2}
          display={"flex"}
          flexDirection={"column"}
        >
          <PanelNotifications />
          <PanelMember />
        </Grid>
      </Grid>
    </Page>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
  tabsItems: (background: string) => ({
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "5px",
    padding: "30px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "62px",
    position: "relative",
  }),
  innerTitle: (title: string, mode: string) => ({
    color: title === "Panel Evaluation Forms" ? "#F6830F" : "#2CB764",
    fontSize: "16px",
    fontWeight: mode === "light" ? "500" : "400",
  }),
};
