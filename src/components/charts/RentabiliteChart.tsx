"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const RentabiliteChart = ({ rentabilite }: { rentabilite: string }) => {
  const parsedRentabilite = parseFloat(rentabilite.replace("%", "")) || 0;

  const data = [{ name: "Rentabilité", value: parsedRentabilite }];

  return (
    <div className="w-full h-24 my-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 12]} hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="value" fill="#10B981" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-between text-xs mt-1 text-gray-500 px-2">
        <span>0%</span>
        <span>6%</span>
        <span>12%+</span>
      </div>
    </div>
  );
};
