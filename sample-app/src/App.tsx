import React, { FC } from "react";
import useTrakker from "./hooks/useTrakker";

interface Props {
  children: React.ReactNode;
}

const App: FC<Props> = ({ children }) => {
  useTrakker();

  return <>{children}</>;
};

export default App;
