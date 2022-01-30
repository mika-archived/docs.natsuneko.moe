import { useRouter } from "next/router";

const useLang = () => {
  const router = useRouter();

  return router.locale ?? "ja-JP";
};

export default useLang;
