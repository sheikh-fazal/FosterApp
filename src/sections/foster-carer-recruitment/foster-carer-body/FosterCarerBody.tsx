import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Image from "next/image";
import React from "react";
import Caution from "@root/assets/img/foster-carer-recruitment/Caution.png";
import { REMINDERSANDNOTIFICATIONS } from "./";

export default function FosterCarerBody() {
  const theme = useTheme();

  return (
    <Grid container mt={2} spacing={2}>
      <Grid item xs={12} lg={7}>
        <Card>
          <HorizaontalTabs
            tabsDataArray={[
              "Recruitment Status",
              "Approved Details",
              "Enquiry Details",
            ]}
          >
            <>Graph 1</>
            <>Graph 2</>
            <>Graph 3</>
          </HorizaontalTabs>
        </Card>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Card sx={{ p: 2 }}>
          <Typography variant="h4">Reminders & Notifications</Typography>
          <Grid container spacing={1}>
            {REMINDERSANDNOTIFICATIONS?.map((item: any) => (
              <Grid item xs={12} sm={6} key={item?.id}>
                <Box
                  sx={{
                    background: item?.background,
                    border: item?.border,
                  }}
                  borderRadius={2}
                  p={1}
                  display={"flex"}
                  alignItems={"center"}
                  height={"100px"}
                >
                  <Image src={item?.src} alt={"Image"} width={0} height={0} />
                  <Typography variant="body2" ml={1} fontWeight={700}>
                    {item?.title}
                    <br />
                    <Typography
                      component={"span"}
                      fontWeight={400}
                      sx={{
                        textDecoration: item?.textDecoration,
                        cursor: "pointer",
                      }}
                    >
                      {item?.caption}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
