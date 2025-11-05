import React from "react";
import { Card } from "react-bootstrap";

export default function WatchlistWidget({ items = [] }){
  return (
    <Card className="p-3">
      <div className="small-muted">Watchlist</div>
      <div style={{ marginTop: 12 }}>
        {items.map((w, i) => (
          <div key={i} className="d-flex justify-content-between align-items-center py-2">
            <div>{w.symbol}</div>
            <div style={{ color: w.change >= 0 ? "var(--success)" : "var(--danger)", fontWeight: 600 }}>
              {w.change >= 0 ? "+" : ""}{w.change}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
