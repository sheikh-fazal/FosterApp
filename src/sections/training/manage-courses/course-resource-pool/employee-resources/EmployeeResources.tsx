import { EMPLOYEE_RESOURCES_ARRAY } from ".";
import CourseResourceCard from "../CourseResourceCard";

export const EmployeeResources = () => {
  return (
    <CourseResourceCard
      cardData={EMPLOYEE_RESOURCES_ARRAY}
      requireAddBtn
      addIcon={""}
      handleAdd={() => alert("hello")}
    />
  );
};
