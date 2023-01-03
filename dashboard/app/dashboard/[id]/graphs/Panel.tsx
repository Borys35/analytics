"use client";

import { supabase } from "@/lib/supabase";
import {
  PropertyEvent,
  PropertyEventType,
  propertyEventTypes,
} from "@/types/supabaseJson";
import Button from "@/ui/atoms/Button";
import Select from "@/ui/atoms/Select";
import Modal from "@/ui/dashboard/Modal";
import GraphStatsItem from "@/ui/dashboard/property/GraphStatsItem";
import { Chart, ChartData, registerables } from "chart.js";
import { FC, useState } from "react";
import { Line } from "react-chartjs-2";
import { useForm } from "react-hook-form";

Chart.register(...registerables);

const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

type Inputs = {
  event: PropertyEventType;
};

interface Props {
  initialEvents: PropertyEvent[];
  id: string;
}

const DAYS = 30;

const Panel: FC<Props> = ({ initialEvents, id }) => {
  const [events, setEvents] = useState(initialEvents);
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const [eventTypes, setEventTypes] = useState<PropertyEventType[]>([
    "session_start",
  ]);
  const [loading, setLoading] = useState(false);

  async function handleRefetchProperty() {
    setLoading(true);
    const { data } = await supabase
      .from("analytics")
      .select("events")
      .eq("id", id);

    if (!data) return;

    setEvents(data[0].events as unknown[] as PropertyEvent[]);
    setLoading(false);
  }

  const data = (t: PropertyEventType) => {
    const getDay = (d: Date) => Math.floor(d.getTime() / 1000 / 60 / 60 / 24);

    const d = new Array(DAYS).fill(0).map((_, i) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - i);
      return events.filter(
        (e) =>
          e.type === t && getDay(currentDate) === getDay(new Date(e.timestamp))
      ).length;
    });

    return d.reverse();
  };

  const datasets: ChartData<"line", number[], string>["datasets"] = [
    ...eventTypes.map((t, i) => ({
      label: t,
      borderColor: colorArray[i],
      data: data(t),
    })),
  ];

  const labels = new Array(DAYS)
    .fill(null)
    .map((_, i) => {
      const labelDate = new Date();
      labelDate.setDate(labelDate.getDate() - i);
      return Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
        labelDate
      );
    })
    .reverse();

  function onSubmit(data: Inputs) {
    if (!data.event || eventTypes.includes(data.event)) return;
    setEventTypes([...eventTypes, data.event]);
    setModalOpen(false);
  }

  function handleEventTypeDelete(type: PropertyEventType) {
    const types = [...eventTypes];
    types.splice(
      types.findIndex((t) => t === type),
      1
    );
    setEventTypes(types);
  }

  return (
    <div className="flex flex-col gap-4">
      <Button
        className="self-end"
        variant="secondary"
        onClick={handleRefetchProperty}
        disabled={loading}
      >
        Refresh
      </Button>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Button onClick={() => setModalOpen(true)}>Add a stat</Button>
          {eventTypes.map((t) => (
            <GraphStatsItem
              key={t}
              title={t}
              onDeleteClick={() => handleEventTypeDelete(t)}
            />
          ))}
        </div>
        <div className="lg:col-start-2 lg:col-end-4 xl:col-end-5">
          <Line
            className="w-full"
            data={{
              labels,
              datasets,
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              color: "#ffffff",
            }}
          />
        </div>
        <Modal open={modalOpen} onShadowClick={() => setModalOpen(false)}>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Select {...register("event")}>
              {propertyEventTypes
                .filter((x) => !eventTypes.includes(x))
                .map((t, i) => (
                  <option key={t}>{t}</option>
                ))}
            </Select>
            <Button as="button">Add</Button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Panel;
