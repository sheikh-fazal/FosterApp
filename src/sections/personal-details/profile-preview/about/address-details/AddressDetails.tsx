import React from "react";
import { useAddressDetails } from "./useAddressDetails";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const AddressDetails = () => {
  const { addressIsLoading, formattedDataAddress, addressDetails, theme } =
    useAddressDetails();

  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 3 }}
      >
        Address Detail
      </Typography>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Address First Line
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
                  {formattedDataAddress?.adressFirstLine ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Address Second Line
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
                  {formattedDataAddress?.adressSecondLine ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Country
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
                  {formattedDataAddress?.country ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  County
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
                  {formattedDataAddress?.county ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Town/City
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
                  {formattedDataAddress?.town ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Post Code
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
                  {formattedDataAddress?.postCode ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  How Long the Candidate lived in this address
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
                  {formattedDataAddress?.long ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Date
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
                  {formattedDataAddress?.date ?? "-"}
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
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Documents
                </Typography>
                {formattedDataAddress?.documents?.map((item: any) => (
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
                        {item.name}
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

export default AddressDetails;
