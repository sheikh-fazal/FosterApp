import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useRightWork } from "./useRightWork";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

const RightWork = () => {
  const { workIsLoading, workDetailsData, workDetails, theme } = useRightWork();

  return (
    <>
      {/* Right to work section started*/}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5.5 }}
      >
        Right To Work
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Does the candidate have the right to work in UK
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
                  {workDetailsData?.rightToWork ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Visa Type
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
                  {workDetailsData?.visaType ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Visa / BRP Number
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
                  {workDetailsData?.BRP ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Visa / BRP Expiry Date
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
                  {dayjs(workDetailsData?.expiryDate ?? "-").format(
                    "MM/DD/YYYY"
                  )}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Share Code
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
                  {workDetailsData?.code ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Documents
                </Typography>
                {workDetailsData?.certificate?.map((item: any) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`${process.env.NEXT_PUBLIC_IMG_URL}${item?.url}`}
                    key={item.id}
                    target="__blank"
                  >
                    <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={24}
                        height={20}
                      />
                      <Typography
                        component={"p"}
                        variant="body2"
                        sx={{
                          color: theme.palette.grey[600],
                          fontWeight: 400,
                          textTransform: "unset",
                        }}
                      >
                        {item.name ?? "-"}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RightWork;
