import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const List: FC<Props> = ({ children }) => {
  return <div className="flex flex-col gap-12">{children}</div>;
};

export default List;
