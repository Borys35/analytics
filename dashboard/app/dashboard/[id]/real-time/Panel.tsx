"use client";

import { supabase } from "@/lib/supabase";
import { PropertyEvent } from "@/types/supabaseJson";
import RealTimeItem from "@/ui/dashboard/property/RealTimeItem";
import { FC, useEffect, useState } from "react";

interface Props {
  id: string;
}

const Panel: FC<Props> = ({ id }) => {
  const [events, setEvents] = useState<PropertyEvent[]>([]);

  useEffect(() => {
    const listener = supabase
      .channel("events-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "events",
          filter: `analytics_id=eq.${id}`,
        },
        (payload) => {
          setEvents((e) => [payload.new as PropertyEvent, ...e]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(listener);
    };
  }, [id]);

  return (
    <div className="-z-10 box relative">
      <div className="-z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-r-2 border-neutral-700"></div>
      <div className="z-0 pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-800 to-neutral-800/0"></div>
      <div className="relative -z-10 h-[600px] overflow-y-hidden flex flex-col gap-12 items-center py-8">
        {events.map((e) => (
          <RealTimeItem key={e.id} name={e.event_type} date={e.created_at} />
        ))}
      </div>
    </div>
  );
};

export default Panel;
