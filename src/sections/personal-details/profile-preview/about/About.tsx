import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { useAbout } from "./useAbout";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import Passport from "../training-work/passport/Passport";
import AddressDetails from "./address-details/AddressDetails";

const About = () => {
  const { formattedDataAbout, isLoading, theme } = useAbout();

  // if (!addressDetails || addressDetails.length === 0) {
  //   return (
  //     <>
  //       <Grid container>
  //         <Grid item width={200}>
  //           <NoContentFound />
  //         </Grid>
  //       </Grid>
  //     </>
  //   );
  // }

  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
      >
        About
      </Typography>
      <Grid container>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <>
            {Object?.entries(formattedDataAbout).map(
              ([key, val]: any, index: any) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      p: "10px 0 0 0",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      sx={{
                        color: theme.palette.grey[600],
                        textTransform: "capitalize",
                      }}
                    >
                      {key}
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"p"}
                      sx={{
                        color: theme.palette.grey[600],
                        fontWeight: 400,
                        textTransform: "unset",
                        mb: 1,
                      }}
                    >
                      {val}
                    </Typography>
                  </Box>
                </Grid>
              )
            )}
          </>
        )}
      </Grid>
      {/* Address Details */}
      <AddressDetails />
      {/* ID Upload */}
      <Passport />
      {/* <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5 }}
      >
        ID Upload (Passport/DL)
      </Typography>
      {ID_DATA.map((item: any) => (
        <Box
          key={item.id}
          sx={{
            p: "10px 0 0 0",
          }}
        >
          <Typography
            component={"p"}
            variant="subtitle2"
            sx={{ color: theme.palette.grey[600], mb: 1 }}
          >
            {item.label}
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, cursor: "pointer" }}>
            <Image src={item.icon} alt="icon" width={24} height={22} />
            <Typography
              component={"p"}
              variant="body2"
              sx={{
                color: theme.palette.grey[600],
                fontWeight: 400,
                textTransform: "unset",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))} */}
    </>
  );
};

export default About;
