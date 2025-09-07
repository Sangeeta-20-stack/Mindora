// src/components/StressChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useTranslation } from "react-i18next";

const COLORS = ["#1abc9c", "#2ecc71", "#f1c40f"];

const StressChart = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-green-900 dark:bg-gray-800 text-white dark:text-green-100 p-5 rounded-2xl w-full flex flex-col items-center shadow-md">
      <h3 className="font-bold text-lg mb-3">{t("stressChart.title")}</h3>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937", // dark gray background
            border: "none",
            borderRadius: "0.5rem",
            color: "#f9fafb", // light text
          }}
          wrapperStyle={{ outline: "none" }}
        />
      </PieChart>
    </div>
  );
};

export default StressChart;
