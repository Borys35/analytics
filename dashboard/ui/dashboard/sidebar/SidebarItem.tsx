import { FC } from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
}

const SidebarItem: FC<Props> = ({ icon, title }) => {
  return (
    <div className="flex gap-4 items-center transition text-neutral-400 hover:text-neutral-50">
      {icon}
      <p className="font-bold text-current">{title}</p>
    </div>
  );
};

export default SidebarItem;
