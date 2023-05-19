import CourseListHeader from "@root/components/CourseListHeader";
import React from "react";
import useSafeguardingChildProtection from "./useSafeguardingChildProtection";

export default function SafeguardingChildProtection() {
  const {
    selectHandler
  } = useSafeguardingChildProtection();
  return (
    <div>
      <CourseListHeader
        searchKey="search"
        showSelectFilters
        onChanged={(data: any) => {
          selectHandler(data);
        }}
      />
    </div>
  );
}
