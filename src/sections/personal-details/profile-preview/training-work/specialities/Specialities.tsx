import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSpecialities } from "./useSpecialities";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const Specialities = () => {
  const { isLoading, specialitiesData, specialLitiesDetails, theme } =
    useSpecialities();

  return (
    <div>
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 5 }}
      >
        Specialities
      </Typography>
      <Grid container>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <>
            {Object?.entries(specialitiesData).map(
              ([key, val]: any, index: any) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      p: "10px 0 0 0",
                    }}
                  >
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
                      {typeof val === "boolean" ? val.toString() : val}
                    </Typography>
                  </Box>
                </Grid>
              )
            )}
          </>
        )}
      </Grid>
    </div>
  );
};

export default Specialities;
