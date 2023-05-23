import { FOSTER_CARER_RESOURCES_ARRAY } from "./index";
import CourseResourceCard from "../CourseResourceCard";

export const FosterCarerResourcesCard = () => {
  return (
    <CourseResourceCard
      cardData={FOSTER_CARER_RESOURCES_ARRAY}
      requireAddBtn
      handleAdd={() => alert("add ")}
    />
  );
};
