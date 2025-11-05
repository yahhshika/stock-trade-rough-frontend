import React from "react";
import { Card } from "react-bootstrap";

export default function PortfolioSummary({ totalValue, todayChange }) {
  return (
    <Card className="p-3">
      <div className="small-muted">Portfolio Summary</div>
      <div className="kpi mt-2">${totalValue.toLocaleString()}</div>
      <div className="small-muted mt-2">Today's Change</div>
      <div style={{ color: todayChange.amount >= 0 ? "var(--success)" : "var(--danger)", fontWeight: 600 }}>
        {todayChange.amount >= 0 ? "+" : "-"}${Math.abs(todayChange.amount).toLocaleString()} ({todayChange.percent}%)
      </div>
    </Card>
  );
}
