import { FC } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const MainPanel: FC<Props> = ({ children, title }) => {
  return (
    <div className="ml-20 flex-1">
      <h3 className="mb-16">{title}</h3>
      {children}
    </div>
  );
};

export default MainPanel;
