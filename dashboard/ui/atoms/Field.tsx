import { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Field: FC<Props> = ({ label, name, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`px-4 py-1.5 text-base bg-neutral-800 border-neutral-700
                    border-2 rounded-xl outline-none focus:border-neutral-500`}
        id={name}
        name={name}
        {...props}
      />
    </div>
  );
};

export default Field;
