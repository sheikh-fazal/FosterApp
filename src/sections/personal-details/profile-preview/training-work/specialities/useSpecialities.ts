import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";

export const useSpecialities = () => {
  const theme: any = useTheme();
  const { data: specialLitiesDetails, isLoading }: any =
    useGetAllProfileDetailsQuery({
      infoToget: "trainingHistory.specialities",
    });

  const specialitiesData = specialLitiesDetails?.data;

  return {
    isLoading,
    specialitiesData,
    specialLitiesDetails,
    theme,
  };
};
