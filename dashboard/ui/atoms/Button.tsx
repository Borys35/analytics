import classNames from "classnames";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "base" | "lg";
  variant?: "primary" | "secondary";
  as?: React.ElementType;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  children,
  size = "base",
  variant = "primary",
  as,
  disabled = false,
  className,
  ...props
}) => {
  const Element = as || "div";

  return (
    <Element
      className={classNames(
        "rounded-lg transition font-bold cursor-pointer border-2 text-center shadow-lg",
        { "px-4 py-1.5 text-base": size === "base" },
        { "px-8 py-3 text-lg": size === "lg" },
        {
          "bg-primary-600 border-primary-600 hover:bg-primary-500 hover:border-primary-400":
            variant === "primary",
        },
        {
          "border-primary-600 hover:border-primary-500":
            variant === "secondary",
        },
        { "opacity-50 cursor-default pointer-events-none": disabled },
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Button;
