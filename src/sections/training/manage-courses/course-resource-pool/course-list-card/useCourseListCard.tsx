import { useRouter } from "next/router"

export const useCourseListCard = () => {
  const path = '/training/manage-courses/course-resource-pool/category/list/archive';
  const router = useRouter();
  const handleCardClick = () => router.push(path);

  return {
    handleCardClick
  }
}