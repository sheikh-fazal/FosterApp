import { SOCIAL_WORKERS_RESOURCES_ARRAY } from ".";
import CourseResourceCard from "../CourseResourceCard";

export const SocialWorkerCard = () => {
  return (
    <CourseResourceCard
      cardData={SOCIAL_WORKERS_RESOURCES_ARRAY}
      requireAddBtn
      addIcon={""}
      handleAdd={() => alert("hello")}
    />
  );
};
