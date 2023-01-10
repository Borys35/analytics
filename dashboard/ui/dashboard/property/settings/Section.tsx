import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Section: FC<Props> = ({ children }) => {
  return <div className="flex flex-col gap-4 items-start">{children}</div>;
};

export default Section;
