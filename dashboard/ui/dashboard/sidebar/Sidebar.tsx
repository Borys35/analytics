import Link from "next/link";
import { FC } from "react";
import Logo from "../../atoms/Logo";
import SidebarItem from "./SidebarItem";

interface Props {
  children?: React.ReactNode;
}

const Sidebar: FC<Props> = ({ children }) => {
  return (
    <div className="col-start-1 col-end-4 lg:col-end-3 flex flex-col">
      <Logo />
      <div className="mt-16 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-4 items-start">{children}</div>
        <div className="flex flex-col gap-4 items-start">
          <Link href="/dashboard">
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current text-current"
                >
                  <path
                    className="text-current"
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              title="Admin"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
