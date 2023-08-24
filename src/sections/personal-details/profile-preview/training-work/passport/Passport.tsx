import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { usePassport } from "./usePassport";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";
import Image from "next/image";
import Link from "next/link";

const Passport = () => {
  const {
    passports,
    passportListIsloading,
    passportlistIsfetching,
    passportListError,
    passportListIsSuccess,
    theme,
  } = usePassport();

  return (
    <>
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5 }}
      >
        ID Upload (Passport/DL)
      </Typography>
      {
        <Box
          sx={{
            p: "10px 0 0 0",
          }}
        >
          <Typography
            component={"p"}
            variant="subtitle2"
            sx={{ color: theme.palette.grey[600], mb: 1 }}
          >
            ID Proof Upload
          </Typography>
          {passportListIsloading ? (
            <Skeleton variant="rectangular" width={300} height={40} />
          ) : (
            <>
              <Link
                style={{
                  display: "flex",
                  gap: 1,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                href={`${process.env.NEXT_PUBLIC_IMG_URL}${passports?.url}`}
                target="__blank"
              >
                {passports.url.includes("PNG") ? (
                  <Image src={pdfIcon} alt="icon" width={24} height={20} />
                ) : passports.url.includes("doc") ? (
                  <Image src={wordIcon} alt="icon" width={24} height={20} />
                ) : passports.url.includes("xls") ? (
                  <Image src={excelIcon} alt="icon" width={24} height={20} />
                ) : (
                  "-"
                )}
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
                  {passports?.name ?? "-"}
                </Typography>
              </Link>
            </>
          )}
        </Box>
      }
    </>
  );
};

export default Passport;
