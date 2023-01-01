import { FC } from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
}

const SidebarItem: FC<Props> = ({ icon, title }) => {
  return (
    <div className="group relative">
      {icon}
      <p className="box px-2 py-1 transition absolute left-full translate-x-4 top-1/2 -translate-y-1/2 w-max scale-0 origin-left group-hover:scale-100">
        {title}
      </p>
    </div>
  );
};

export default SidebarItem;
