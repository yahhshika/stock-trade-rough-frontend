import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Dashboard from "./pages/Dashboard";
import Trade from "./pages/Trade";
import WatchlistPage from "./pages/WatchlistPage";

export default function App() {
  return (
    <div className="app-root">
      <TopNavbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

