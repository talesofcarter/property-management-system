import React, { useState } from "react";
import { CiSearch, CiMail, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiBellOn } from "react-icons/ci";

const Header = ({
  isDarkMode,
  setIsDarkMode,
  toggleSidebar,
}) => {
  const [isSearchFocused, setIsSearchFocused] =
    useState(false);

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
            placeholder="Search..."
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
            <CiBellOn
              className="text-2xl cursor-pointer transition-colors duration-200 hover:opacity-80"
              style={{ color: currentColors.text }}
            />
            <span
              className="absolute -top-2 -right-2 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse"
              style={{
                backgroundColor: currentColors.primary,
              }}
            >
              3
            </span>
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
