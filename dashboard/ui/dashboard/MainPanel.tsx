import { FC } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const MainPanel: FC<Props> = ({ children, title }) => {
  return (
    <div className="col-start-4 xl:col-start-3 col-end-13">
      <h3 className="mb-16">{title}</h3>
      {children}
    </div>
  );
};

export default MainPanel;
