import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { useResults } from "./useResults";
import ResultTable from "./result-table/ResultTable";
import FormTable from "@root/components/Table/FormTable";

const Results = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
    useResults();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        route={route}
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "postTopic",
            defaultValue: "Family-safety-security",
            label: "Post Topic",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "publishDate",
            defaultValue: "6/1/2023 :: 02:12:12 PM ",
            label: "Publish Date",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "typeOfPost",
            defaultValue: "Evergreen Content",
            label: "Type of Post",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "impressions",
            defaultValue: "31534",
            label: "Impressions",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "engagements",
            defaultValue: "315",
            label: "Engagements",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "engagementsRate",
            defaultValue: "315",
            label: "Engagements Rate",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "spend",
            defaultValue: "315",
            label: "Spend",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "costPerEngagement",
            defaultValue: "315",
            label: "Cost Per Engagement",
            validation: (Yup: any) => {},
          },
        ]}
      />
    </FormProvider>
  );
};

export default Results;
