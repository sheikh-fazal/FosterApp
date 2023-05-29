import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import React from "react";

const UnannouncedVisit = () => {
  const router = useRouter();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      dateVisit: "10/10/2021",
      visitStatus: "Text",
      status: "Text",
      fcSignature: "File",
    },
    {
      srNo: 2,
      dateVisit: "11/10/2021",
      visitStatus: "Text",
      status: "Text",
      fcSignature: "File",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateVisit,
      id: "dateVisit",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.visitStatus,
      id: "visitStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Visit Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fcSignature,
      id: "locked",
      cell: (info: any) => info.getValue(),
      header: () => <span>Fc Signature</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          size="small"
          type="view"
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-chronology-of-events/unannounced-visit"
            )
          }
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <CustomTable
      data={data}
      columns={columns}
      isLoading={false}
      isFetching={false}
      isError={false}
      isPagination={false}
      isSuccess={true}
      // count={Math.ceil(data?.data?.meta?.total / limit)}
      currentPage={1}
      onPageChange={(data: any) => {}}
      onSortByChange={(data: any) => {}}
    />
  );
};

export default UnannouncedVisit;