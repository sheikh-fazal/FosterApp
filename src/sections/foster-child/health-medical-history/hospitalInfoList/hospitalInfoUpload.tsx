import React, { useMemo } from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";
import ModelUploadDoc from "../../../../components/modal/modelUploadDoc";
import { Formet, defvalue, uploadDummyData } from ".";
import {
  useGetHospitalInfoListDocumentQuery,
  useLazyGetHospitalInfoListDocumentBYIDQuery,
} from "@root/services/foster-child/health-medical-history/hospital-info-list/hospitalInfoListDocument";
import { useTableParams } from "@root/hooks/useTableParams";
import useHospitalinfoListForms from "./useHospitalinfoListForms";

function HospitalInfoUpload(props: any) {
  const { fosterChildId, hospitalinfoId } = props;

  const [Search, setSearch] = React.useState("");
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetHospitalInfoListDocumentQuery({
      params: {
        hospitalInfoFormId: hospitalinfoId,
        fosterCarerId: fosterChildId,
        search: Search,
        ...params,
      },
    });
  const {
    onUploadSubmit,
    modelOpen,
    setModelOpen,
    isloading,
    isFatching,
    setisloading,
    getdefvalue,
  } = useHospitalinfoListForms({
    fosterChildId: fosterChildId,
    hospitalinfoId: hospitalinfoId,
  });

  const col = useMemo(() => {
    return [
      {
        accessorFn: (row: any) => row.id,
        id: "srNo",
        cell: (info: any) => info.getValue(),
        header: () => <span>Sr. No</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.documentName,
        id: "documentName",
        cell: (info: any) => info.getValue(),
        header: () => <span>Document Name</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.documentType,
        id: "documentType",
        cell: (info: any) => info.getValue(),
        header: () => <span>Document Type</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.documentDate,
        id: "documentDate",
        cell: (info: any) => (
          <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>
        ),
        header: () => <span>Document Date</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.personUploaded,
        id: "personUploaded",
        cell: (info: any) => info.getValue(),
        header: () => <span>Person Uploaded</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.password,
        id: "password",
        cell: (info: any) => info.getValue(),
        header: () => <span>Password</span>,
        isSortable: true,
      },
      {
        id: "actions",
        cell: (info: any) => (
          <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
            <DeletePrompt />
            <ModelUploadDoc
              showActions={true}
              isFetching={false}
              action="edit"
              onSubmit={(data: any) => {
                console.log(data);
              }}
            />
            <ModelUploadDoc
              showActions={true}
              action="view"
              defaultValues={async () =>
                await getdefvalue(info.row.original.id)
              }
              isloading={isloading}
            />
            <Link
              href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.file}`}
              target="_blank"
            >
              <TableAction size="small" type="download" />
            </Link>
          </Box>
        ),
        header: () => <span>actions</span>,
        isSortable: false,
      },
    ];
  }, [getdefvalue, isloading]);

  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          title="Uploaded Documents"
          searchKey="search"
          onChanged={(e: any) => {
            setSearch(e.search);
          }}
          showAddBtn
          onAdd={() => {
            setModelOpen(true);
          }}
        />
      </Box>
      <ModelUploadDoc
        action={"add"}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        isFetching={isFatching}
        onSubmit={onUploadSubmit}
      />
      <CustomTable
        data={data?.hospitalinfolistDocuments ?? []}
        columns={col}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        isPagination={true}
        showSerialNo={false}
        totalPages={data?.meta?.pages ?? 0}
        currentPage={data?.meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
      />
    </>
  );
}

export default HospitalInfoUpload;
