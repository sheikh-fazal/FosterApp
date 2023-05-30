import { useRouter } from "next/router";

export const useDecisionSheet = () => {
  const router = useRouter();
  const path = '/reports/ifa-reports/FR-I/add';
  const handleSearch = () => { };
  const handleAction = (action?: string, id?: string) => {
    switch (action) {
      case 'add':
        router.push({ pathname: path })
        break;

      default:
        break;
    }
  };
  return {
    handleSearch,
    handleAction
  }
}