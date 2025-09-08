import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundColor: isDarkMode ? "#1b2431" : "#fff",
      }}
    >
      <div className="flex-shrink-0">
        <Sidebar isDarkMode={isDarkMode} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          toggleSidebar={toggleSidebar}
        />

        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Dashboard isDarkMode={isDarkMode} />
              }
            />
            <Route
              path="/projects"
              element={<Projects isDarkMode={isDarkMode} />}
            />
            <Route
              path="/profile"
              element={<Profile isDarkMode={isDarkMode} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
