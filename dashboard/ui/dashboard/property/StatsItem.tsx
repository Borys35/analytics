import classNames from "classnames";
import { FC } from "react";

interface Props {
  count: string;
  title: string;
  variant?: "default" | "primary" | "error";
  className?: string;
}

const StatsItem: FC<Props> = ({
  count,
  title,
  variant = "default",
  className,
}) => {
  return (
    <div
      className={classNames(
        "box px-6 py-4 flex flex-col-reverse gap-2 min-h-[240px]",
        { "border-primary-500 bg-primary-600": variant === "primary" },
        { "border-red-500 bg-red-600": variant === "error" },
        className
      )}
    >
      <p>{title}</p>
      <p className="text-5xl text-neutral-50 font-bold">{count}</p>
    </div>
  );
};

export default StatsItem;
