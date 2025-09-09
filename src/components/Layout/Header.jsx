import React, { useState } from "react";
import { CiSearch, CiMail, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiBellOn } from "react-icons/ci";

const Header = ({
  isDarkMode,
  setIsDarkMode,
  toggleSidebar,
  sidebarOpen,
}) => {
  const [isSearchFocused, setIsSearchFocused] =
    useState(false);
  const [showNotifications, setShowNotifications] =
    useState(false);

  // Mock notification data
  const notifications = [
    {
      id: 1,
      title: "New Tenant Application",
      description: "John Smith applied for apartment #304",
      time: "10 minutes ago",
      type: "application",
    },
    {
      id: 2,
      title: "Maintenance Request",
      description: "Plumbing issue reported in unit #508",
      time: "2 hours ago",
      type: "maintenance",
    },
    {
      id: 3,
      title: "Payment Received",
      description:
        "Rent payment received from Sarah Johnson",
      time: "5 hours ago",
      type: "payment",
    },
    {
      id: 4,
      title: "Lease Renewal",
      description: "Lease renewal reminder for 123 Main St",
      time: "1 day ago",
      type: "lease",
    },
  ];

  // Custom color variables
  const colors = {
    light: {
      primary: "#487fff",
      text: "#4b5563",
      bg: "#fff",
      border: "#e5e7eb",
    },
    dark: {
      primary: "#6b8cbe",
      text: "#d1d5db",
      bg: "#1b2431",
      border: "#273142",
    },
  };

  const currentColors = isDarkMode
    ? colors.dark
    : colors.light;

  // Function to get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case "application":
        return "📋";
      case "maintenance":
        return "🔧";
      case "payment":
        return "💳";
      case "lease":
        return "📄";
      default:
        return "🔔";
    }
  };

  return (
    <div
      className="flex items-center justify-between p-3 h-[81px] border-b transition-colors duration-300"
      style={{
        backgroundColor: currentColors.bg,
        borderColor: currentColors.border,
      }}
    >
      <div className="flex items-center space-x-4 md:space-x-6">
        <button
          onClick={() => toggleSidebar()}
          className="p-2 rounded-md transition-colors duration-200 hover:bg-opacity-10 cursor-pointer"
          style={{
            color: currentColors.text,
            backgroundColor: isDarkMode
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.05)",
          }}
          aria-label="Toggle sidebar"
        >
          <RxHamburgerMenu className="text-xl md:text-2xl" />
        </button>

        <div
          className={`hidden md:flex relative transition-all duration-300 ${
            isSearchFocused ? "w-80" : "w-64"
          }`}
        >
          <input
            type="text"
            placeholder="Search properties, tenants..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
            style={{
              backgroundColor: isDarkMode
                ? "#273142"
                : "#f9fafb",
              borderColor: isDarkMode
                ? "#374151"
                : "#e5e7eb",
              color: currentColors.text,
            }}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            style={{
              color: isDarkMode ? "#9ca3af" : "#6b7280",
            }}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-5">
        <CiSearch
          className="md:hidden text-xl cursor-pointer"
          style={{ color: currentColors.text }}
        />

        <div className="flex items-center gap-2">
          <span
            className="text-sm"
            style={{ color: currentColors.text }}
          >
            Light
          </span>
          <label className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              id="theme-toggle"
              className="peer sr-only"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <span
              className="absolute inset-0 cursor-pointer rounded-full transition-colors duration-400"
              style={{
                backgroundColor: isDarkMode
                  ? currentColors.primary
                  : "#d1d5db",
              }}
            ></span>
            <span className="absolute left-1 bottom-1 h-4 w-4 bg-white rounded-full transition-transform duration-400 peer-checked:translate-x-6"></span>
          </label>
          <span
            className="text-sm"
            style={{ color: currentColors.text }}
          >
            Dark
          </span>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <CiMail
            className="text-2xl cursor-pointer transition-colors duration-200 hover:opacity-80"
            style={{ color: currentColors.text }}
          />

          <div className="relative">
            <button
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="p-1 rounded-md transition-colors duration-200 hover:bg-opacity-10"
              style={{
                color: currentColors.text,
                backgroundColor: showNotifications
                  ? isDarkMode
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(0,0,0,0.08)"
                  : "transparent",
              }}
            >
              <CiBellOn className="text-2xl cursor-pointer transition-colors duration-200 hover:opacity-80" />
            </button>
            <span
              className="absolute -top-2 -right-2 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse"
              style={{
                backgroundColor: currentColors.primary,
              }}
            >
              {notifications.length}
            </span>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div
                className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto rounded-lg shadow-lg z-50"
                style={{
                  backgroundColor: isDarkMode
                    ? "#273142"
                    : "#fff",
                  border: isDarkMode
                    ? "1px solid #374151"
                    : "1px solid #e5e7eb",
                }}
              >
                <div
                  className="p-4 border-b"
                  style={{
                    borderColor: isDarkMode
                      ? "#374151"
                      : "#e5e7eb",
                  }}
                >
                  <h3
                    className="font-semibold"
                    style={{ color: currentColors.text }}
                  >
                    Notifications
                  </h3>
                </div>
                <div
                  className="divide-y"
                  style={{
                    divideColor: isDarkMode
                      ? "#374151"
                      : "#e5e7eb",
                  }}
                >
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 hover:bg-opacity-50 cursor-pointer transition-colors duration-150"
                      style={{
                        backgroundColor: isDarkMode
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.03)",
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-lg">
                          {getNotificationIcon(
                            notification.type
                          )}
                        </span>
                        <div className="flex-1">
                          <h4
                            className="font-medium text-sm"
                            style={{
                              color: currentColors.text,
                            }}
                          >
                            {notification.title}
                          </h4>
                          <p
                            className="text-xs mt-1"
                            style={{
                              color: isDarkMode
                                ? "#9ca3af"
                                : "#6b7280",
                            }}
                          >
                            {notification.description}
                          </p>
                          <p
                            className="text-xs mt-2"
                            style={{
                              color: isDarkMode
                                ? "#6b7280"
                                : "#9ca3af",
                            }}
                          >
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="p-3 border-t text-center"
                  style={{
                    borderColor: isDarkMode
                      ? "#374151"
                      : "#e5e7eb",
                  }}
                >
                  <button
                    className="text-sm font-medium"
                    style={{ color: currentColors.primary }}
                    onClick={() =>
                      setShowNotifications(false)
                    }
                  >
                    Mark all as read
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 cursor-pointer group">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: isDarkMode
                  ? "#273142"
                  : "#eef2ff",
              }}
            >
              <CiUser
                style={{ color: currentColors.primary }}
                className="text-xl"
              />
            </div>
            <div className="hidden md:block">
              <span
                className="text-sm font-medium"
                style={{ color: currentColors.text }}
              >
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
