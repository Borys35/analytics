import React, { forwardRef } from "react";

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <select
        className="min-w-[240px] px-4 py-1.5 text-base box outline-none focus:border-neutral-500"
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;
