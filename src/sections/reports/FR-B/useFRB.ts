import { useRouter } from "next/router";

export const useFRB = () => {
  const router = useRouter();
  const path = '/reports/ifa-reports/FR-B/foster-carer-report';

  const handleSearch = () => { };
  const handleAction = (action?: string, id?: any) => {
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