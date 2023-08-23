import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { useTrainingWorkTable } from "./useTrainingWorkTable";
import Image from "next/image";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";

const TrainingWorkTable = () => {
  const {
    trainings,
    trainingListIsloading,
    traininglistIsfetching,
    trainingListError,
    trainingListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useTrainingWorkTable();

  const columns = [
    {
      accessorFn: (row: any) => row.trainingName ?? "-",
      id: "trainingName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.issuedDate ?? "-",
      id: "certificateIssued",
      cell: (info: any) => info.getValue(),
      header: () => <span>Certificate Issued</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.expiryDate ?? "-",
      id: "certificateExpiryDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Certificate Expiry Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.certificate ?? "-",
      id: "Attachments",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {info.getValue().map((data: any) => (
              <Box key={data.id}>
                {data.url.includes("pdf") ? (
                  <Image src={pdfIcon} alt="icon" width={24} height={20} />
                ) : data.url.includes("doc") ? (
                  <Image src={wordIcon} alt="icon" width={24} height={20} />
                ) : data.url.includes("xls") ? (
                  <Image src={excelIcon} alt="icon" width={24} height={20} />
                ) : (
                  ""
                )}
              </Box>
            ))}
          </Box>
        );
      },
      header: () => <span>Attachments</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 3 }}
        component="div"
      >
        Additional Training Details
      </Typography>
      <CustomTable
        data={trainings}
        columns={columns}
        isLoading={trainingListIsloading}
        isFetching={traininglistIsfetching}
        isError={trainingListError}
        isSuccess={trainingListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default TrainingWorkTable;
