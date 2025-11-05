import React from "react";
import { Card } from "react-bootstrap";
export default function RecentActivity({ items = [] }) {
  return (
    <Card className="recentAct p-3 mb-3">
      <div className="small-muted">Recent Activity</div>
      <ul className="mt-3" style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((it, i) => (
          <li key={i} className="mb-2">
            <div style={{ fontWeight: 600 }}>{it.text}</div>
            <div className="small-muted" style={{ fontSize: 12 }}>{it.date}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
