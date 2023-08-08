import { useRouter } from "next/router";

export const useSafeCarePolicy = () => {
  const { query } = useRouter();
  const { id, action } = query;
  return {
    router: "Test",
  };
};
