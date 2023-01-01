"use client";

import Button from "@/ui/atoms/Button";
import Modal from "@/ui/dashboard/Modal";
import GraphStatsItem from "@/ui/dashboard/property/GraphStatsItem";
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const GraphsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="flex flex-col gap-4">
        <Button onClick={() => setModalOpen(true)}>Add a stat</Button>
        <GraphStatsItem title="page_view" subtitle="/about" />
        <GraphStatsItem title="session_start" />
      </div>
      <div className="lg:col-start-2 lg:col-end-4">
        <Line
          className="w-full"
          datasetIdKey="id"
          data={{
            labels: ["Dec 27, 2022", "Dec 28, 2022", "Dec 29, 2022"],
            datasets: [
              {
                label: "page_view (/about)",
                borderColor: colorArray[0],
                data: [5, 3, 7],
              },
              {
                label: "session_start",
                borderColor: colorArray[1],
                data: [3, 6, 1],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            color: "#ffffff",
          }}
        />
      </div>
      <Modal open={modalOpen} onShadowClick={() => setModalOpen(false)}>
        dsfsdfs
      </Modal>
    </div>
  );
};

export default GraphsPage;
