import { useEffect } from "react";
import Trakker from "trakker-analytics";

export function useTrakker() {
  useEffect(() => {
    const trakker = new Trakker("mYQnHoaViMt48a3Y7zfBM");
    trakker.initialize();
  }, []);
}

export default useTrakker;
