import { Box, Checkbox, useTheme } from "@mui/material";
import Image from "next/image";

export const usePlacementSpecialNeedsAgreementTable = () => {
  const theme: any = useTheme();

  const FinanceAgreementLocalAuthorityColumns = [
    {
      accessorFn: (row: any) => row.placementAgreementReceipts,
      id: "placementAgreementReceipts",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Agreement/Receipts</span>,
    },
    {
      accessorFn: (row: any) =>  <Image src={row.policy} alt="Document Icon " />,
      id: "policy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Policy</span>,
    },
    {
      accessorFn: (row: any) => row.dateApproved,
      id: "dateApproved",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Approved</span>,
    },
    {
      accessorFn: (row: any) => row.agencyApprovedByRole,
      id: "agencyApprovedByRole",
      cell: (info: any) => info.getValue(),
      header: () => <span> Agency Approved by (Role)</span>,
    },
    {
      accessorFn: (row: any) => row.LaApprovedByRole,
      id: "LaApprovedByRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>LA Approved by (Role)</span>,
    },
    {
      accessorFn: (row: any) => row.digitalSignature,
      id: "digitalSignature",
      cell: (info: any) => info.getValue(),
      cell: ({ row}: any) => (
        <Box>
          <Checkbox
            checked={row?.digitalSignature ? true : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
      header: () => <span>Digital Signature</span>,
    },
   
  ];

  return {
    FinanceAgreementLocalAuthorityColumns,
    theme,
  };
};
