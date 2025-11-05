import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

const data = [
  { day: "D1", value: 110000 },
  { day: "D10", value: 114000 },
  { day: "D20", value: 119000 },
  { day: "D30", value: 125000 },
];

export default function PortfolioPerformance() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="p-3"
      style={{
        background:
          "linear-gradient(145deg, rgba(8,12,25,1) 0%, rgba(20,30,60,1) 100%)",
        border: "1px solid rgba(0,255,255,0.07)",
        boxShadow: isHovered
          ? "0 0 25px rgba(0,255,255,0.25)"
          : "0 0 10px rgba(0,255,255,0.05)",
        borderRadius: "20px",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: isHovered ? "scale(1.01)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="small-muted" style={{ color: "#a8b5d8", fontWeight: 500 }}>
        Portfolio Performance (30d)
      </div>

      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Subtle grid lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />

            {/* Axis */}
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />

            {/* Gradients for line and area */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00b4d8" stopOpacity={0.5} />
                <stop offset="80%" stopColor="#001b2e" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="50%" stopColor="#6a5acd" />
                <stop offset="100%" stopColor="#8a2be2" />
              </linearGradient>
            </defs>

            {/* Area under the curve */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fill="url(#areaGradient)"
            />

            {/* Main Line (changes glow on hover) */}
            <Line
              type="monotone"
              dataKey="value"
              stroke={isHovered ? "url(#lineGradient)" : "#00bcd4"}
              strokeWidth={isHovered ? 4 : 2.5}
              dot={{
                r: isHovered ? 5 : 4,
                fill: isHovered ? "#00ffff" : "#00bcd4",
                strokeWidth: 1,
                stroke: "#00e0ff",
              }}
              activeDot={{
                r: 8,
                fill: "#00ffff",
                stroke: "#00e0ff",
                strokeWidth: 2,
              }}
              animationDuration={1000}
            />

            {/* Tooltip styling */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#141b2d",
                border: "1px solid #00e0ff",
                borderRadius: "12px",
                color: "#ffffff",
                boxShadow: "0 0 10px rgba(0,255,255,0.2)",
              }}
              cursor={{
                stroke: "#00e0ff",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
