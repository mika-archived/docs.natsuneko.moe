import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useDrawer = () => {
  const [state, setState] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setState(false);
  }, [router]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return {
    drawerState: state,
    setDrawerState: setState,
  };
};

export default useDrawer;
