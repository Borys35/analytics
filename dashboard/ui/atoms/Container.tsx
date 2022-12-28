import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

const Container: FC<Props> = ({ as, children, className, ...props }) => {
  const Element = as || "div";

  return (
    <Element
      className={classNames(
        "w-full max-w-screen-xl mx-auto py-4 px-6 lg:py-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Container;
