import React from "react";
import { Card, Table } from "react-bootstrap";
import "./CurrentHoldings.css";

export default function CurrentHoldings({ holdings }) {
  return (
    <Card className="holdings-card p-3">
      <div className="holdings-title">💼 Current Holdings</div>
      <Table responsive hover borderless className="holdings-table mt-3">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Shares</th>
            <th>Avg. Cost</th>
            <th>Current Price</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h, i) => (
            <tr key={i}>
              <td>{h.name}</td>
              <td>{h.shares}</td>
              <td>${h.avgCost}</td>
              <td>${h.currentPrice}</td>
              <td
                className={h.change >= 0 ? "positive" : "negative"}
              >
                {h.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
