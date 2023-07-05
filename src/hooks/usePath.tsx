import { useRouter } from "next/router";

// ----------------------------------------------------------------------

const usePath = () => {
  const router = useRouter();
  const query = router.query;

  const makePath = (path = "", passQuery = true) => {
    return {
      pathname: path,
      ...(passQuery && { query }),
    };
  };

  return { makePath, query };
};
export default usePath;
