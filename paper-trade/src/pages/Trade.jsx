import React, { useState } from "react";
import "./Trade.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ButtonGroup,
  Nav,
} from "react-bootstrap";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Trade = () => {
  const [limitOrder, setLimitOrder] = useState(false);
  const [selectedTab, setSelectedTab] = useState("analysis");
  const [quantity, setQuantity] = useState("");

  const data = [
    { name: "10D", price: 100, volume: 110 },
    { name: "1W", price: 110, volume: 120 },
    { name: "1M", price: 105, volume: 100 },
    { name: "3M", price: 115, volume: 115 },
    { name: "6M", price: 120, volume: 108 },
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "fundamentals":
        return <p className="text-light">Tesla P/E ratio: 75.2 | EPS: $9.45</p>;
      case "news":
        return (
          <ul className="text-secondary">
            <li> New battery tech reduces cost by 15%.</li>
            <li> Tesla opens new Gigafactory in Berlin.</li>
            <li> Q3 earnings exceed analyst expectations.</li>
          </ul>
        );
      case "analysis":
      default:
        return <p className="text-light">Technical outlook: Bullish trend expected short-term.</p>;
    }
  };

  return (
    <Container
      fluid
      className="p-4"
      style={{ backgroundColor: "#0a0e17", minHeight: "100vh" }}
    >
      <Row>
        {/* Chart and Tabs */}
        <Col lg={8}>
          <Card className="bg-dark text-light shadow-lg p-4 border-0 rounded-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4 className="mb-0 text-info">TSLA (Tesla Inc.)</h4>
                <h2 className="fw-bold text-success">$719.35</h2>
                <p className="text-danger mb-0">-5.80 (-0.80%)</p>
              </div>
              <span className="badge bg-success text-dark px-3 py-2">LIVE</span>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2f3a" />
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1b1f2b",
                    border: "none",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                />
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00ff99" stopOpacity={1} />
                    <stop offset="100%" stopColor="#007bff" stopOpacity={0.4} />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopCoor="#007bff" />
                  </linearGradient>
                </defs>
                <Bar
                  dataKey="volume"
                  fill="url(#colorVolume)"
                  radius={[8, 8, 0, 0]}
                  barSize={40}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={{ fill: "#fff", r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* Tabs */}
            <Nav variant="tabs" className="mt-3 custom-tabs">
              {["Company", "Fundamentals", "News", "Analysis"].map((tab) => (
                <Nav.Item key={tab}>
                  <Nav.Link
                    onClick={() => setSelectedTab(tab.toLowerCase())}
                    active={selectedTab === tab.toLowerCase()}
                  >
                    {tab}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <div className="mt-3">{renderTabContent()}</div>
          </Card>

          <Card className="bg-dark mt-4 text-light p-3 rounded-4 border-0 shadow-lg">
            <h5 className="mb-3 text-info">Recent News</h5>
            <ul className="mb-0">
              <li>Tesla reports record delivery numbers for Q3.</li>
              <li>New battery tech expected to reduce cost by 15%.</li>
              <li>Tesla expands production capacity in Europe.</li>
            </ul>
          </Card>
        </Col>

        {/* Trading Panel */}
        <Col lg={4}>
          <Card className="bg-dark text-light p-4 border-0 rounded-4 shadow-lg">
            <h5 className="text-info mb-3">Trade Controls</h5>
            <ButtonGroup className="mb-3 w-100">
              <Button variant="success" className="fw-bold py-2">
                BUY
              </Button>
              <Button variant="danger" className="fw-bold py-2">
                SELL
              </Button>
            </ButtonGroup>

            {/* FIXED INPUT FIELD */}
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="trade-input"
              />
            </Form.Group>

            <Form.Check
              type="switch"
              label="Limit Order"
              className="text-secondary mb-3"
              checked={limitOrder}
              onChange={() => setLimitOrder(!limitOrder)}
            />
            <Button variant="outline-info" className="w-100 py-2">
              Place Order
            </Button>
          </Card>

          <Card className="bg-dark text-light mt-4 p-3 rounded-4 border-0 shadow-lg">
            <h5 className="text-info mb-3">Order Book</h5>
            <table className="table table-dark table-sm mb-0">
              <thead>
                <tr>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-success">
                  <td>$719.20</td>
                  <td>12</td>
                  <td>1.2%</td>
                </tr>
                <tr className="text-success">
                  <td>$719.10</td>
                  <td>8</td>
                  <td>0.9%</td>
                </tr>
                <tr className="text-danger">
                  <td>$718.70</td>
                  <td>6</td>
                  <td>0.3%</td>
                </tr>
                <tr className="text-danger">
                  <td>$718.50</td>
                  <td>4</td>
                  <td>0.2%</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Trade;
