import { useRouter } from "next/router";

export const useFosteringServiceManagerReport = () => {
  const router = useRouter();
  const path = '/reports/ifa-reports/FR-H';
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