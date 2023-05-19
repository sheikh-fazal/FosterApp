import { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import EditIcon from "../../../../../assets/svg/safeguarding/edit.svg";
import UkFlag from "../../../../../assets/svg/safeguarding/uk-flag.svg";
import ShareIcon from "../../../../../assets/svg/safeguarding/share.svg";
import EmailIcon from "../../../../../assets/svg/safeguarding/Email.svg";
import PhoneIcon from "../../../../../assets/svg/safeguarding/Phone.svg";
import DeleteIcon from "../../../../../assets/svg/safeguarding/delete.svg";
import WhatsApp from "../../../../../assets/svg/safeguarding/whatsapp.svg";
import ActiveLock from "../../../../../assets/svg/safeguarding/activeLock.svg";
import InactiveLock from "../../../../../assets/svg/safeguarding/inactiveLock.svg";

// =====================================================================================

export const useContactDirectory = (contactInfoModal:any,setContactInfoModal:any) => {
  const [isShareModal, setIsShareModal] = useState(false);
  const [isPhoneModal, setIsPhoneModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [activeImages, setActiveImage] = useState<any>([]); 

  const handleClick = (index: any) => {
    setActiveImage((prevActiveImages: any) => {
      const updatedImages = [...prevActiveImages];
      if (updatedImages.includes(index)) {
        const indexToRemove = updatedImages.indexOf(index);
        updatedImages.splice(indexToRemove, 1);
      } else {
        updatedImages.push(index);
      }
      return updatedImages;
    });
  };

  const agencySafeguardingColumns = [
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.role,
      id: "role",
      cell: (info: any) => info.getValue(),
      header: () => <span>Role</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.safeguardingRole,
      id: "safeguardingRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Department</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.branch,
      id: "branch",
      cell: (info: any) => info.getValue(),
      header: () => <span>Branch</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.businessPhone,
      id: "businessPhone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Phone</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.mobile,
      id: "mobile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Mobile</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.company,
      id: "company",
      cell: (info: any) => info.getValue(),
      header: () => <span>Company</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.address,
      id: "address",
      cell: (info: any) => info.getValue(),
      header: () => <span>Address</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.postCode,
      id: "postCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Postcode</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.country,
      id: "country",
      cell: (info: any) => <Image src={UkFlag} alt="img" />,
      header: () => <span>Country</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.colorCode,
      id: "colorCode",
      cell: (info: any) => <Box sx={{ backgroundColor: info.getValue() ? info.getValue() : "#b0d6e3", height: "1.5rem", width: "1.5rem" }} />,
      header: () => <span>Color Code</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (data: any) => {
        return (
          <Box>
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "center", mb: "2px" }}>
              <StyledImage
                src={EditIcon}
                onClick={() => setContactInfoModal({ isToggle: true, data: data?.row?.original })}
                alt="User Profile"
                width={23}
                height={23}
              />
              <StyledImage
                src={activeImages.includes(data?.cell?.row?.index) ? ActiveLock : InactiveLock}
                alt="User Profile"
                width={23}
                height={23}
                onClick={() => handleClick(data?.cell?.row?.index)}
              />
              <StyledImage src={ShareIcon} alt="User Profile" width={23} height={23} onClick={() => setIsShareModal(true)} />
              <StyledImage src={DeleteIcon} alt="Delete Icon" width={23} height={23} onClick={() => setIsDeleteModal(true)} />
            </Box>
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
              <StyledImage src={PhoneIcon} onClick={() => setIsPhoneModal(true)} alt="User Profile" width={23} height={23} />
              <StyledImage src={EmailIcon} onClick={() => setIsEmailModal(true)} alt="User Profile" width={23} height={23} />
              <StyledImage src={WhatsApp} alt="User Profile" width={23} height={23} />
            </Box>
          </Box>
        );
      },
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return {
    agencySafeguardingColumns,
    handleClick,
    isShareModal,
    setIsShareModal,
    isEmailModal,
    setIsEmailModal,
    isDeleteModal,
    setIsDeleteModal,
    activeImages,
    setActiveImage,
    isPhoneModal,
    contactInfoModal,
    setIsPhoneModal
  };
};

// ==============================================

const StyledImage = styled(Image)({
  cursor: "pointer",
});