"use client";

import Link from "next/link";
import { FC } from "react";

interface Props {
  id: string;
  name: string;
  date: string;
}

const PropertyItem: FC<Props> = ({ id, name, date }) => {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="box py-3 px-6 flex justify-between transition hover:border-neutral-600">
        <div>
          <p className="text-neutral-50 font-bold text-lg mb-1">{name}</p>
          <p className="text-sm">
            Created{" "}
            {Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
              new Date(date)
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyItem;
