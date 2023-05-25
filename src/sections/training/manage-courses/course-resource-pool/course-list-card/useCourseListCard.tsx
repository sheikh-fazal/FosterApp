import { useRouter } from "next/router"

export const useCourseListCard = () => {
  const courseListPath = '/training/manage-courses/course-resource-pool/category/list/list-detail';
  const searchCoursePath = '/training/manage-courses/search-course/course-detail';
  const archiveCoursePath = '/training/manage-courses/archive-course/course-detail';
  const router = useRouter();
  const handleCardClick = (mandatory?: any, name?: string) => {
    switch (name) {
      case 'searchCourse':
        router.push({ pathname: searchCoursePath, });
        break;
      case 'courseList':
        router.push({ pathname: courseListPath, query: { mandatory } });
        break;
      case 'archiveCourse':
        router.push({ pathname: archiveCoursePath });
        break;
      default:
        break;
    }
  };

  return {
    handleCardClick,
  }
}