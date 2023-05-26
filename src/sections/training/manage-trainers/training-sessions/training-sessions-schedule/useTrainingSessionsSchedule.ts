import index from "@root/pages/training/manage-courses/course-resource-pool/foster-carer-resources/ad-hoc-coureses/foundation-for-re-parenting";
import { scheduleData } from ".";
import { useTheme } from "@mui/material";

export const useTrainingSessionsSchedule = () => {
  const theme = useTheme();
  const scheduleDataMap = scheduleData.map((item, idx) => {
    return {
      ...item,
      background: theme.palette.primary.main,
    };
  });
  return {
    scheduleDataMap,
  };
};
