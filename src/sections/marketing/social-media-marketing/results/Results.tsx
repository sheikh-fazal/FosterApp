import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { useResults } from "./useResults";
import ResultTable from "./result-table/ResultTable";

const Results = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
    useResults();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <ResultTable
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
            inputType: "dateField",
            type: "text",
            key: "publishDate",
            defaultValue: "6/1/2023 :: 02:12:12 PM ",
            label: "Publish Date",
            validation: (Yup: any) => {},
          },
          {
            inputType: "selectField",
            type: "select",
            key: "typeOfPost",
            defaultValue: "Devplan",
            label: "Type of Post",
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
        ]}
      />
    </FormProvider>
  );
};

export default Results;
