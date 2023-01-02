"use client";

import { supabase } from "@/lib/supabase";
import { PropertyEvent } from "@/types/supabaseJson";
import RealTimeItem from "@/ui/dashboard/property/RealTimeItem";
import { FC, useEffect, useState } from "react";

interface Props {
  initialEvents: PropertyEvent[];
  id: string;
}

const Panel: FC<Props> = ({ id, initialEvents }) => {
  const [events, setEvents] = useState<PropertyEvent[]>([]);
  const [oldEvents, setOldEvents] = useState<PropertyEvent[]>(initialEvents);

  useEffect(() => {
    const listener = supabase
      .channel("analytics-events-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "analytics",
          filter: `id=eq.${id}`,
        },
        (payload) => {
          const { events: newEvents } = payload.new;

          setEvents((e) =>
            newEvents.filter(
              (ne: PropertyEvent) => !oldEvents.some((ef) => ef.id === ne.id)
            )
          );
          setOldEvents(newEvents);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(listener);
    };
  }, []);

  return (
    <div className="flex flex-col gap-12 items-center relative">
      <div className="-z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-r-2 border-neutral-700"></div>
      {events.map((e) => (
        <RealTimeItem key={e.id} name={e.type} date={e.timestamp} />
      ))}
    </div>
  );
};

export default Panel;
