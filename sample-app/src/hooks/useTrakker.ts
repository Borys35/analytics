import { useEffect } from "react";
import Trakker from "trakker-analytics";

export function useTrakker() {
  useEffect(() => {
    const trakker = new Trakker("6zXka4OhUXwRJIg3dT8fxU");
    trakker.initialize();
  }, []);
}

export default useTrakker;
