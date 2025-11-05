import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function TopNavbar() {
  const navItems = [
    { to: "/", label: "Dashboard" },
    { to: "/trade", label: "Trade" },
    { to: "/watchlist", label: "Watchlist" },
  ];

  return (
    <Navbar variant="dark" expand="lg" className="px-3" style={{ background: "#0b1220", borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
      <Container fluid>
        <Navbar.Brand className="fw-bold" style={{ color: "#9eeef2" }}>
          <span style={{ marginRight: 8 }}></span> PAPER TRADE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {navItems.map(item => (
              <Nav.Link
                as={NavLink}
                to={item.to}
                key={item.to}
                end
                className={({ isActive }) => "px-3 " + (isActive ? "active" : "")}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
