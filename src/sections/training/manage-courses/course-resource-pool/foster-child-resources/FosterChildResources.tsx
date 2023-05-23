import { FOSTER_CHILD_RESOURCES_ARRAY } from ".";
import CourseResourceCard from "../CourseResourceCard";

export const FosterChildResources = () => {
  return (
    <CourseResourceCard
      cardData={FOSTER_CHILD_RESOURCES_ARRAY}
      requireAddBtn
      addIcon={""}
      handleAdd={() => alert("hello")}
    />
  );
};
