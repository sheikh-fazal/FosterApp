import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, useTheme } from "@mui/material";
import { ADDRESS_DATA, ID_DATA } from ".";
import Image from "next/image";
import { useAbout } from "./useAbout";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import NoContentFound from "@root/components/Table/NoContentFound";

const About = () => {
  const theme: any = useTheme();
  const {
    formattedDataAbout,
    isLoading,
    addressIsLoading,
    formattedDataAddress,
    addressDetails,
  } = useAbout();

  console.log("formattedDataAddress", formattedDataAddress);

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
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 3 }}
      >
        Address Detail
      </Typography>

      <Grid container>
        {ADDRESS_DATA.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box
              key={item.id}
              sx={{
                p: "10px 0 0 0",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600] }}
                component={"p"}
              >
                {item.label}
              </Typography>
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
              <Box sx={{ display: "flex", gap: 2 }}>
                {item.sublist?.map((title: any) => (
                  <Box
                    key={title.id}
                    sx={{ display: "flex", gap: 0.5, cursor: "pointer" }}
                  >
                    <Image src={title.icon} alt="icon" width={24} height={20} />
                    <Typography
                      component={"p"}
                      variant="body2"
                      sx={{
                        color: theme.palette.grey[600],
                        fontWeight: 400,
                        textTransform: "unset",
                      }}
                    >
                      {title.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ID Upload */}
      <Typography
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
      ))}
    </>
  );
};

export default About;
