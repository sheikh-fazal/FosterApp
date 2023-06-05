import { useRouter } from "next/router";

// ===========================================================

export const useCyberEseentials = () => {
  const router = useRouter();
  const path = "/policies-and-guidelines/cyber-essentials/cyber-essentials-form";
  const handleAdd = (title: string) => {
    router.push({ pathname: path, query: { title } });
  };

  return {
    router,
    handleAdd,
  };
};
