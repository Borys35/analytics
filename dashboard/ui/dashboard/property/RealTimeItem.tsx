import { FC } from "react";

interface Props {
  name: string;
  date: string;
}

const RealTimeItem: FC<Props> = ({ name, date }) => {
  return (
    <div className="relative">
      <p className="absolute top-1/2 -translate-y-1/2 right-full -translate-x-8 w-max">
        {Intl.DateTimeFormat("en", { dateStyle: "long" }).format(
          new Date(date)
        )}
      </p>
      <div className="w-4 h-4 rounded-full bg-primary-700"></div>
      <p className="absolute top-1/2 -translate-y-1/2 left-full translate-x-8 w-max text-neutral-50 font-bold text-lg">
        {name}
      </p>
    </div>
  );
};

export default RealTimeItem;
