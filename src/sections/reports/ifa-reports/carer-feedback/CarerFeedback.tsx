import React from "react";
import { TableDemoData, careerFeedbackFilterData } from ".";
import { useCarerFeedback } from "./useCarerFeedback";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const CareerFeedback = () => {
  const { columns, handleSearch } = useCarerFeedback();

  return (
    <ReportsLayout
      searchOnRight
      tableHeaderProps={{ title: '', }}
      selectFilterArray={careerFeedbackFilterData}
      handleFilterChange={(event: any) => { console.log(event) }}
      handleFilterBtn={handleSearch}
      tableProps={{
        data: TableDemoData,
        columns,
        isSuccess: true
      }}
    />
  );
};

export default CareerFeedback;
