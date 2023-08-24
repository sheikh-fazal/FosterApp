import React from "react";
import { EMPLOYEMENT_STATUS } from ".";
import { Box, Grid, Skeleton, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import BankDetailsTable from "./BankDetailsTable";
import Passport from "../training-work/passport/Passport";
import { useOtherInformation } from "./useOtherInformation";
import Link from "next/link";

const OtherInformation = () => {
  const { documentsIsLoading, documentsData, documentsDetails, theme } =
    useOtherInformation();

  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
        component={"p"}
      >
        Employment Status
      </Typography>
      <Grid container>
        {EMPLOYEMENT_STATUS?.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box
              key={item.id}
              sx={{
                p: "10px 0 0 0",
              }}
            >
              <Typography
                component={"p"}
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], mb: 0.5 }}
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

              {item.sublist?.map((title: any) => (
                <Box
                  key={title.title}
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
          </Grid>
        ))}
      </Grid>
      {/* Additional Docs Section Started */}
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 3 }}
      >
        Additional Docs
      </Typography>

      <Grid container>
        {documentsData?.map((item: any) => (
          <Grid item xs={12} key={item.id}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: "10px 0 0 0",
                  }}
                >
                  {documentsIsLoading ? (
                    <Skeleton variant="rectangular" width={300} height={40} />
                  ) : (
                    <>
                      <Typography
                        component={"p"}
                        variant="subtitle2"
                        sx={{ color: theme.palette.grey[600] }}
                      >
                        DOCUMENT NAME
                      </Typography>
                      <Typography
                        component={"p"}
                        variant="body2"
                        sx={{
                          color: theme.palette.grey[600],
                          fontWeight: 400,
                          textTransform: "unset",
                          mb: 1,
                          p: "10px 0 0 0",
                        }}
                      >
                        {item?.documentName ?? "-"}
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
                  {documentsIsLoading ? (
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
                      <Box sx={{ display: "flex", gap: 1 }}>
                        {item?.certificate?.map((item: any) => (
                          <Link
                            style={{ textDecoration: "none" }}
                            href={`${process.env.NEXT_PUBLIC_IMG_URL}${item?.url}`}
                            key={item.id}
                            target="__blank"
                          >
                            <Box
                              sx={{
                                display: "flex",
                                gap: 1,
                                cursor: "pointer",
                                p: "10px 0 0 0",
                              }}
                            >
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
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* Bank Details Table */}
      <BankDetailsTable />
      {/* ID Upload */}
      <Passport />
    </>
  );
};

export default OtherInformation;
