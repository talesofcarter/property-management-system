import React, { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { GoProject } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ isDarkMode = false }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const colors = {
    light: {
      primary: "#487fff",
      text: "#4b5563",
      bg: "#fff",
      hoverBg: "#f3f4f6",
      border: "#e5e7eb",
    },
    dark: {
      primary: "#6b8cbe",
      text: "#d1d5db",
      bg: "#1b2431",
      hoverBg: "#273142",
      border: "#374151",
    },
  };

  const currentColors = isDarkMode
    ? colors.dark
    : colors.light;

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LuLayoutGrid />,
    },
    {
      id: "projects",
      label: "My Projects",
      icon: <GoProject />,
    },
    {
      id: "profile",
      label: "My Profile",
      icon: <FaUser />,
    },
  ];

  return (
    <div
      className="h-screen w-64 flex flex-col border-r transition-colors duration-300"
      style={{
        backgroundColor: currentColors.bg,
        borderColor: currentColors.border,
      }}
    >
      <div
        className="p-6 border-b"
        style={{ borderColor: currentColors.border }}
      >
        <h1
          className="text-2xl font-bold"
          style={{ color: currentColors.primary }}
        >
          Residaa
        </h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeItem === item.id
                    ? "font-medium"
                    : ""
                }`}
                style={{
                  backgroundColor:
                    activeItem === item.id
                      ? currentColors.primary
                      : "transparent",
                  color:
                    activeItem === item.id
                      ? "#fff"
                      : currentColors.text,
                }}
                onMouseEnter={(e) => {
                  if (activeItem !== item.id) {
                    e.target.style.backgroundColor =
                      currentColors.hoverBg;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeItem !== item.id) {
                    e.target.style.backgroundColor =
                      "transparent";
                  }
                }}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="text-lg mr-3">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="p-4 border-t"
        style={{ borderColor: currentColors.border }}
      >
        <button
          className="w-full flex items-center px-4 py-3 rounded-lg transition-colors duration-200"
          style={{ color: currentColors.text }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor =
              currentColors.hoverBg;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
          }}
        >
          <span className="text-lg mr-3">
            <IoIosLogOut />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
