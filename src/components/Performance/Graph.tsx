import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { TypeGraph } from "./PerformanceCard";

export default function Graph({ graph }: { graph: TypeGraph[] }) {
  return (
    <ResponsiveContainer width="100%" height={101}>
      <AreaChart
        width={200}
        height={60}
        data={graph}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2D9CDB" />
            <stop offset="100%" stopColor="rgba(45, 156, 219, 0.00)" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
