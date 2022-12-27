import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const InstructionItem: FC<Props> = ({ title, description }) => {
  return (
    <div className="group flex flex-col gap-4 max-w-md md:w-72 lg:w-auto md:odd:translate-x-1/2 ml-20 md:even:ml-0 md:even:-translate-x-1/2 md:odd:ml-20 md:even:mr-20 md:even:text-right">
      <h5
        className={`font-semibold relative before:absolute before:w-4 before:h-4 before:rounded-lg-full
                    before:bg-primary-500 before:top-1/2 before:-translate-y-1/2 before:-left-12 md:before:-right-12 md:before:left-auto group-odd:before:-left-12`}
      >
        {title}
      </h5>
      <p>{description}</p>
    </div>
  );
  ``;
};

export default InstructionItem;
