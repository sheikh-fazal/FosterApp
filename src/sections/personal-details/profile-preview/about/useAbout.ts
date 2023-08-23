import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";

export const useAbout = () => {
  const { data: personalData, isLoading }: any = useGetAllProfileDetailsQuery({
    infoToget: "personalInfo",
  });

  const { data: addressDetails, isLoading: addressIsLoading }: any =
    useGetAllProfileDetailsQuery({
      infoToget: "aboutCandidate.addressDetail",
    });

  //Function to Add Gap Between Object Keys For About API
  function formatObjectKeys(obj: any) {
    const formattedObj: any = {};
    const regex = /((?<=[a-z])([A-Z])|([A-Z])(?=[a-z]))/g;
    Object.entries(obj || {}).forEach(([key, value]) => {
      const formattedKey = key.replace(regex, " $1");
      formattedObj[formattedKey] = value;
    });
    return formattedObj;
  }
  //Storing Updated Keys
  const formattedDataAbout = formatObjectKeys(personalData?.data);

  //Function to Add Gap Between Object Keys for Address API
  function formatObject(obj: any) {
    const formattedObj: any = {};
    const regex = /((?<=[a-z])([A-Z])|([A-Z])(?=[a-z]))/g;
    Object.entries(obj || {}).forEach(([key, value]) => {
      const formattedKey = key.replace(regex, " $1");
      formattedObj[formattedKey] = value;
    });
    return formattedObj;
  }
  //Storing Updated Keys
  const formattedDataAddress = formatObject(addressDetails?.data);

  return {
    isLoading,
    formattedDataAbout,
    addressIsLoading,
    formattedDataAddress,
    addressDetails,
  };
};
