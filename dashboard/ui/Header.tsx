import classNames from "classnames";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Header: FC<Props> = ({ children, className, ...props }) => {
  return (
    <header
      className={classNames(
        "text-center flex flex-col items-center lg:w-2/3 mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
};

export default Header;
