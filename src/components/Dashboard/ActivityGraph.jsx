import React from "react";
import { FiUser } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Tutorial dataset tracking months
const data = [
  { name: "Jan", Returning: 275, New: 41 },
  { name: "Feb", Returning: 620, New: 96 },
  { name: "Mar", Returning: 202, New: 192 },
  { name: "Apr", Returning: 500, New: 50 },
  { name: "May", Returning: 355, New: 400 },
  { name: "Jun", Returning: 875, New: 200 },
  { name: "Jul", Returning: 700, New: 205 },
];

const ActivityGraph = () => {
  return (
    <div className="col-span-12 lg:col-span-8 overflow-hidden rounded border border-stone-300 bg-white">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium text-stone-700 capitalize">
          <FiUser /> Activity
        </h3>
      </div>

      <div className="h-64 px-4 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20, // Offsets the empty Y-Axis label gap cleanly
              bottom: 0,
            }}
          >
            {/* Soft grid backgrounds */}
            <CartesianGrid stroke="#e4e4e7" strokeDasharray="3 3" />

            {/* X Axis configured with valid native object styling properties */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#78716c", fontSize: 12, fontWeight: 600 }}
              dy={8}
            />

            {/* Y Axis configured with valid native object styling properties */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#78716c", fontSize: 12, fontWeight: 600 }}
            />

            {/* Injected custom styles so tooltips render beautifully in plain React */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e7e5e4",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
              }}
              labelStyle={{ fontSize: "0.75rem", color: "#78716c" }}
            />

            {/* Line data graphs matching the tutorial properties */}
            <Line
              type="monotone"
              dataKey="New"
              stroke="#18181b"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="Returning"
              stroke="#5b21b6"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;
