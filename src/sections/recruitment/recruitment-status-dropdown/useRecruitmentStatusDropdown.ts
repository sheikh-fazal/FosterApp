import { usePatchEnquiryStageStatusMutation } from "@root/services/recruitment/enquiry-stage/enquiryStage";
import React, { useEffect } from "react";
import { optionData } from ".";

export const useRecruitmentStatusDropdown = ({
  id,
  status,
  textForApi,
  setMockData,
  component,
  mockData,
}: any) => {
  
  const [
    enquiryStagePatchData,
    {
      isLoading: isUpdating,
      // isSuccess: hasUpdated
    },
  ] = usePatchEnquiryStageStatusMutation({});

  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(
    optionData.findIndex((x) => x.text === status)
  );
  useEffect(() => {
    setSelectedIndex(optionData?.findIndex((x) => x?.text === status));
  }, [status]);

  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    const x = optionData?.find((ele: any, ind: any) => ind === index);
    const patchObj = {
      point: textForApi,
      status: x?.text,
    };
    setMockData(
      mockData?.map((item: any) => ({
        ...item,
        status: item?.textForApi === textForApi ? x?.text : item?.status,
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
      // when API is ready then this will be change by me(fazal)
      case "AssessmentStage1":
        setOpen(false);
      case "AssessmentStage2":
        setOpen(false);
      case "ReadyForPlacement":
        setOpen(false);

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
    isUpdating,
  };
};
