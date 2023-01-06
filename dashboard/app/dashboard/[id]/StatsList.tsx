"use client";

import { getEvents, getProperty } from "@/lib/supabase";
import { Database } from "@/types/supabase";
import { PropertyEvent, propertyEventTypes } from "@/types/supabaseJson";
import Button from "@/ui/atoms/Button";
import StatsItem from "@/ui/dashboard/property/StatsItem";
import { FC, useState } from "react";

interface Props {
  initialProperty: Database["public"]["Tables"]["analytics"]["Row"];
  initialEvents: PropertyEvent[];
}

const StatsList: FC<Props> = ({ initialProperty, initialEvents }) => {
  const [property, setProperty] = useState(initialProperty);
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(false);

  async function handleRefetchProperty() {
    setLoading(true);

    const { id } = initialProperty;
    const p = await getProperty(id);
    const e = await getEvents(id);

    setProperty(p);
    setEvents(e);

    setLoading(false);
  }

  return (
    <div>
      <Button
        className="w-fit ml-auto mb-4"
        variant="secondary"
        onClick={handleRefetchProperty}
        disabled={loading}
      >
        Refresh
      </Button>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {propertyEventTypes.map((t, i) => (
          <StatsItem
            key={`${i}. ${t}`}
            count={events.filter((e) => e.event_type === t).length}
            title={t}
            variant={
              t === "session_start"
                ? "primary"
                : t === "error"
                ? "error"
                : "default"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default StatsList;
