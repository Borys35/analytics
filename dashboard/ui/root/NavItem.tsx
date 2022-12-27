import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const NavItem: FC<Props> = ({ children }) => {
  return (
    <p className="font-bold transition text-neutral-400 hover:text-neutral-50">
      {children}
    </p>
  );
};

export default NavItem;
