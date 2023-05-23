import { COURSE_SUB_RESOURCE_ARRAY } from ".";
import CourseResourceCard from "../CourseResourceCard";

export const CourseSubCategories = () => {
  return (
    <CourseResourceCard
      cardData={COURSE_SUB_RESOURCE_ARRAY}
      requireAddBtn
      addIcon={""}
      handleAdd={() => alert("hello")}
    />
  );
};
