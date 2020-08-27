import React from "react";
import { IonPage } from "@ionic/react";
import CalendarComponent from "../components/calendar";
import "./RecordTab.css";
import { AreaChart, Area } from "recharts";

const data = [
  {
    uv: 4000,
  },
  {
    uv: 3000,
  },
  {
    uv: 500,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
];

const RecordTab: React.FC = () => {
  return (
    <IonPage>
      <div className="calendar-container">
        <CalendarComponent></CalendarComponent>
      </div>
      <AreaChart
        width={380}
        height={100}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="14.49%" stopColor="#2e5bff" stopOpacity={0.2} />
            <stop offset="69.23%" stopColor="#4370ff" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#4370ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#4370FF"
          strokeWidth="2.5"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </IonPage>
  );
};

export default RecordTab;
