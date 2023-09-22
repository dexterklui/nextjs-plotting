"use client";

import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

export default function SimpleBarChart({ data, color = "#46BE8B" }) {
  return (
    <BarChart width={800} height={400} data={data}>
      <Tooltip />
      <Bar dataKey="count" barSize={30} fill={color} />
      <XAxis dataKey="gender" />
      <YAxis />
    </BarChart>
  );
}
