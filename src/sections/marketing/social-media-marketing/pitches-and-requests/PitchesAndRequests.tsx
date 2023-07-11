import { FormProvider } from "@root/components/hook-form";
import React from "react";
import PitchesAndRequestTable from "./pitches-and-request-table/PitchesAndRequestTable";
import { usePitchesAndRequests } from "./usePitchesAndRequests";
import FormTable from "@root/components/Table/FormTable";
import { Box } from "@mui/material";
import AvatarIMG from "../../../../assets/img/ifaAvatar.png";
import Image from "next/image";

const PitchesAndRequests = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
    usePitchesAndRequests();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        route={route}
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "Branded keywords",
            label: "Name",
            validation: (Yup: any) => {},
          },
          {
            inputType: "multi-select",
            type: "text",
            key: "typeOfContent",
            defaultValue: "6/1/2023 :: 02:12:12 PM ",
            label: "Type of Content",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "requestor",
            defaultValue: "Evergreen Content",
            label: "Requestor",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "requestedDate",
            defaultValue: "4/26/2021",
            label: "Requested Date",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "goal",
            defaultValue:
              "Share a unique use of our video platform from an influencer.",
            label: "Goal",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "proposedCopy",
            defaultValue: "315",
            label: "Proposed Copy",
            validation: (Yup: any) => {},
          },
          {
            inputType: "file",
            type: "upload",
            key: "name",
            label: "Name",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "teamSocialNotes",
            defaultValue: "315",
            label: "Team Social Notes",
            validation: (Yup: any) => {},
          },
        ]}
      />
    </FormProvider>
  );
};

export default PitchesAndRequests;
