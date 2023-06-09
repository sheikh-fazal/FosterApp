import { usePatchEnquiryStageStatusMutation } from "@root/services/recruitment/enquiry-stage/enquiryStage";
import React from "react";

export const useRecruitmentStatusDropdown = ({
  id,
  status,
  point,
  selectedObj,
  component,
}: // patchData
any) => {
  const [enquiryStagePatchData] = usePatchEnquiryStageStatusMutation({});
  const options = ["Failed", "To be reviewed", "Passed", "Pending"];
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // console.log(patchData);

  const anchorRef = React.useRef<HTMLDivElement>(null);
  const optionsColor: any = {
    Failed: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
    "To be reviewed": "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    Passed: "linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)",
    Pending: "linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%)",
  };
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

  const handleMenuItemClick = (event: any, index: number) => {
    // console.log( id, status, point, index);
    // let x= options.forEach(({ele, ind}:any)=>console.log(ind === index)
    // )
    // console.log(x);
    // console.log(selectedObj);

    const x = optionData.find((ele: any, ind: any) => ind === index);
    // console.log(x);
    const patchObj = {
      point: selectedObj?.textForApi,
      status: x?.text,
    };
    // console.log(patchObj);

    setSelectedIndex(index);
    // switch (component) {
    //   case "EnquiryStage":
    //    return enquiryStagePatchData({
    //       userId: "4f7512fb-2916-451b-8240-97f529ded73d",
    //       // point: patchObj?.point,
    //       // status: patchObj?.status,
    //       body:patchObj
    //     });
    //   // case "assessmentStageOne":
    //   // case "assessmentStageTwo":
    //   // case "contractsAndDeclaratins":
    //   // case "readyForPlacement":

    //   // default: alert('error');
    // }
    setOpen(false);
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
    options,
    open,
    setOpen,
    selectedIndex,
    setSelectedIndex,
    anchorRef,
    handleMenuItemClick,
    handleClose,
    optionData,
    optionsColor,
  };
};
