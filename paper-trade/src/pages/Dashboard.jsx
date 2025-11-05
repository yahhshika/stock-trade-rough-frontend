import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioSummary from "../sections/PortfolioSummary";
import PortfolioPerformance from "../sections/PortfolioPerformance";
import CurrentHoldings from "../sections/CurrentHoldings";
import RecentActivity from "../sections/RecentActivity";
import WatchlistWidget from "../sections/WatchlistWidget";

export default function Dashboard() {
  const holdings = [
    { name: "AAPL", shares: 50, avgCost: 150.2, currentPrice: 175.8, change: 17.04 },
    { name: "GOOGL", shares: 30, avgCost: 2500.1, currentPrice: 2780.5, change: 11.21 },
    { name: "TSLA", shares: 20, avgCost: 780.5, currentPrice: 720.3, change: 2.83 },
  ];

  const activities = [
    { text: "Bought 20 TSLA", date: "Oct 25" },
    { text: "Sold 15 NFLX (+$5,000 virtual cash)", date: "Oct 26" },
    { text: "Added AMZN to watchlist", date: "Oct 28" },
  ];

  const watchlist = [
    { symbol: "AMZN", change: 3.5 },
    { symbol: "NVDA", change: 7.2 },
    { symbol: "MSFT", change: 1.2 },
  ];

  return (
    <Container fluid>
      <Row className="g-4">
        <Col lg={3}>
          <PortfolioSummary totalValue={125890.52} todayChange={{ amount: 1230.15, percent: 0.99 }} />
        </Col>

        <Col lg={6}>
          <PortfolioPerformance />
        </Col>

        <Col lg={3}>
          <RecentActivity items={activities} />
          <div style={{ height: 12 }} />
          <WatchlistWidget items={watchlist} />
        </Col>

        <Col lg={12}>
          <CurrentHoldings holdings={holdings} />
        </Col>
      </Row>
    </Container>
  );
}
