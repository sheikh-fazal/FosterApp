import { Box } from "@mui/material";
import TableImage from "../../../assets/img/Approve.png";
import Image from "next/image";
import router from "next/router";

export const SELECTFILTERS = [
  {
    key: "status",
    label: "Status",
    options: [{ label: "status", value: "status" }],
  },
];

export const dataFosterCarerRecruitment = [
  {
    img: TableImage,
    carerCode: "John",
    carerName: "Orcalo",
    gender: "Pakistan",
    areaLocality: "Male",
    areaOffice: "XYZ",
    detailsId: "2163421684589234523806598",
  },
];

export const columnsFosterCarerRecruitment = [
  {
    accessorFn: (row: any) => row?.img,
    id: "img",
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image
          src={info.getValue()}
          alt={"User Image"}
          width={35}
          height={35}
        />
      </Box>
    ),
    header: "Image",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.carerCode,
    id: "carerCode",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Carer Code",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.carerName,
    id: "carerName",
    cell: (info: any) => (
      <Box
        color={(theme: any) => theme.palette.primary.main}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          router.push(`/recruitment/?${info?.row?.original?.detailsId}`);
        }}
      >
        {info.getValue() ?? "-"}
      </Box>
    ),
    header: "Carer Name",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.gender,
    id: "gender",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Gender",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.areaLocality,
    id: "areaLocality",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Area Locality",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.areaOffice,
    id: "areaOffice",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Area Office",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.recruitmentStatus,
    id: "recruitmentStatus",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Recruitment Status",
    isSortable: false,
  },
];

export { default as FosterCarerRecruitmentTable } from "./FosterCarerRecruitmentTable";
