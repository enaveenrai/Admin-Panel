import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { feature: "Tracking", mobile: 15, desktop: 110, max: 150 },
  { feature: "Builder", mobile: 130, desktop: 90, max: 150 },
  { feature: "Schedule", mobile: 86, desktop: 130, max: 150 },
  { feature: "AI Train", mobile: 125, desktop: 40, max: 150 },
  { feature: "Interval", mobile: 148, desktop: 90, max: 150 },
];

export const UsageRadar = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300 bg-white">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium text-stone-700 capitalize">
          <FiEye /> Usage
        </h3>
      </div>

      <div className="h-64 w-full pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#e7e5e4" />

            {/* FIXED: Replaced className with the valid tick configuration object */}
            <PolarAngleAxis
              dataKey="feature"
              tick={{ fill: "#57534e", fontSize: 11, fontWeight: 600 }}
            />

            {/* FIXED: Adjusted angle orientation and custom sizing format */}
            <PolarRadiusAxis
              angle={90}
              domain={[0, 150]}
              tick={{ fill: "#a8a29e", fontSize: 10 }}
            />

            <Radar
              name="Desktop"
              dataKey="desktop"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.3}
            />
            <Radar
              name="Mobile"
              dataKey="mobile"
              stroke="#06b6d4"
              fill="#06b6d4"
              fillOpacity={0.3}
            />

            <Tooltip />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
