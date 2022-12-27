import { FC } from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 max-w-lg">
      <div className="flex gap-6 items-center ml-4">
        {icon}
        <h5 className="font-semibold">{title}</h5>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
