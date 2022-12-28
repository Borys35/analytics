import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const MainPanel: FC<Props> = ({ children }) => {
  return (
    <div className="col-start-4 lg:col-start-3 col-end-13">{children}</div>
  );
};

export default MainPanel;
