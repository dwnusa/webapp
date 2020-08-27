import React from "react";
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
const SmallDot = (props: any) => {
  const radius = 4;
  const diameter = radius * 2;
  return (
    <svg width={diameter} height={diameter} style={{ overflow: "visible" }}>
      {props.index === data.length - 1 && (
        <circle
          cx={props.cx}
          cy={props.cy}
          r={radius}
          stroke="white"
          strokeWidth="1"
          fill={props.color}
        ></circle>
      )}
    </svg>
  );
};
const Chart1: React.FC = () => {
  return (
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
        dot={<SmallDot color={"#4370FF"}></SmallDot>}
      />
    </AreaChart>
  );
};

export default Chart1;
