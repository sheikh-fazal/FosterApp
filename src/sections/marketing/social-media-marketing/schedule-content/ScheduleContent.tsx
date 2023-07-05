import React from "react";
import { useScheduleContent } from "./useScheduleContent";
import { FormProvider } from "@root/components/hook-form";
import ScheduleContentTable from "./schedule-table/ScheduleContentTable";

const ScheduleContent = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
    useScheduleContent();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <ScheduleContentTable
        tableKey="exampleTable"
        route={route}
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "postTopic",
            defaultValue: "branded keywords ",
            label: "Post Topic",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "dnt",
            defaultValue: "6/1/2023 :: 02:12:12 PM ",
            label: "Date & Time",
            validation: (Yup: any) => {},
          },
          {
            inputType: "selectField",
            type: "select",
            key: "status",
            defaultValue: "Devplan",
            label: "Status",
            validation: (Yup: any) => {},
          },
          {
            inputType: "selectField",
            type: "select",
            key: "channels",
            defaultValue: "Facebook",
            label: "Channels",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "copy",
            defaultValue: "Drive traffic to site, CPC >$2.25",
            label: "Copy",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "socialMediaOwner",
            defaultValue: "Drive traffic to site, CPC >$2.25",
            label: "Social Media Owner",
            validation: (Yup: any) => {},
          },
        ]}
      />
    </FormProvider>
  );
};

export default ScheduleContent;
