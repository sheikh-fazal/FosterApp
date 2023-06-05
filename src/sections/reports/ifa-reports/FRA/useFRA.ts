import { useRouter } from "next/router";

export const useFRA = () => {
  const router = useRouter();
  const path = '/reports/ifa-reports/FR-A/social-worker-report';
  const handleSearch = () => { };
  const handleAction = (action?: string, id?: string) => {
    switch (action) {
      case 'add':
        // router.push({ pathname: path })
        break;
      case 'view':
        router.push({ pathname: `${path}/${id}`, query: { action } })
      default:
        break;
    }
  };
  return {
    handleSearch,
    handleAction
  }
}