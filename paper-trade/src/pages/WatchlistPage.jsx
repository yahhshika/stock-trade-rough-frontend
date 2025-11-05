import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "./WatchlistPage.css";
const mock = [
  { symbol: "AMZN", price: 3467.5, change: 3.5 },
  { symbol: "NVDA", price: 610, change: 7.8 },
  { symbol: "MSFT", price: 330.9, change: 1.2 },
  { symbol: "AAPL", price: 175.2, change: 2.1 },
  { symbol: "GOOGL", price: 2820.5, change: -0.8 },
  { symbol: "TSLA", price: 720.1, change: 4.4 },
  { symbol: "META", price: 355.9, change: 1.7 },
  { symbol: "NFLX", price: 602.4, change: -2.3 },
  { symbol: "BABA", price: 88.2, change: 0.5 },
  { symbol: "ADBE", price: 520.7, change: -1.4 },
];

export default function WatchlistPage() {
  return (
    <Container fluid className="watchlist-container">
      <Row>
        <Col>
          <Card className="watchlist-card">
            <div className="watchlist-title">Watchlist</div>
            <Table hover responsive className="watchlist-table mt-3">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {mock.map((m, i) => (
                  <tr key={i}>
                    <td>{m.symbol}</td>
                    <td>${m.price.toLocaleString()}</td>
                    <td
                      className={m.change >= 0 ? "positive" : "negative"}
                    >
                      {m.change >= 0 ? "+" : ""}
                      {m.change}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
