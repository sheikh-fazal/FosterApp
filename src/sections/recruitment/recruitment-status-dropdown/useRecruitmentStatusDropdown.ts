import { usePatchEnquiryStageStatusMutation } from "@root/services/recruitment/enquiry-stage/enquiryStage";
import React, { useEffect } from "react";
const optionData = [
  {
    id: 1,
    text: "Failed",
    bgColor: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
  },
  {
    id: 2,
    text: "To be reviewed",
    bgColor: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
  },
  {
    id: 3,
    text: "Passed",
    bgColor: "linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)",
  },
  {
    id: 4,
    text: "Pending",
    bgColor: "linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%)",
  },
];
export const useRecruitmentStatusDropdown = ({
  id,
  status,
  apiData,
  textForApi,
  setEnquiryStageData,
  component,
  enquiryStageData,
}: any) => {
  const [enquiryStagePatchData,{ isLoading:isUpdating, isSuccess:hasUpdated }] = usePatchEnquiryStageStatusMutation({});
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(
    optionData.findIndex((x) => x.text === status)
  );
  useEffect(() => {
    setSelectedIndex(optionData.findIndex((x) => x.text === status));
  }, [status]);
  

  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    const x = optionData.find((ele: any, ind: any) => ind === index);
    const patchObj = {
      point: textForApi,
      status: x?.text,
    };
    setEnquiryStageData(
      enquiryStageData.map((item: any) => ({
        ...item,
        status: item.textForApi === textForApi ? x?.text : item.status,
      }))
    );

    switch (component) {
      case "EnquiryStage":
        return (
          enquiryStagePatchData({
            userId: id,
            body: patchObj,
          }) && setOpen(false) 
        );
      // case "assessmentStageOne":
      // case "assessmentStageTwo":
      // case "contractsAndDeclaratins":
      // case "readyForPlacement":

      // default: setOpen(false);
    }
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return {
    open,
    setOpen,
    selectedIndex,
    setSelectedIndex,
    anchorRef,
    handleMenuItemClick,
    handleClose,
    optionData,
    isUpdating
  };
};
