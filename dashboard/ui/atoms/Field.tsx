import { forwardRef } from "react";
import { FieldError } from "react-hook-form/dist/types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: FieldError;
}

const Field = forwardRef<HTMLInputElement, Props>(
  ({ label, name, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          className={`px-4 py-1.5 text-base box outline-none focus:border-neutral-500`}
          id={name}
          name={name}
          ref={ref}
          {...props}
        />
        {error && <p className="text-error text-sm">{error.message}</p>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
