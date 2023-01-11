import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Trakker from "trakker-analytics";

export function useTrakker() {
  const location = useLocation();

  useEffect(() => {
    const trakker = new Trakker("6zXka4OhUXwRJIg3dT8fxU");
    trakker.initialize();
  }, [location]);
}

export default useTrakker;
