import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FiHome,
  FiDollarSign,
  FiClipboard,
  FiUsers,
  FiTrendingUp,
  FiTrendingDown,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiKey,
  FiCalendar,
  FiStar,
} from "react-icons/fi";

import {
  summaryData,
  revenueData,
  propertyData,
  PROPERTY_COLORS,
  activityData,
  topProperties,
} from "../components/data/dashboarData.js";

const iconComponents = {
  FiHome: FiHome,
  FiDollarSign: FiDollarSign,
  FiClipboard: FiClipboard,
  FiUsers: FiUsers,
  FiCheckCircle: FiCheckCircle,
  FiClipboard: FiClipboard,
  FiDollarSign: FiDollarSign,
  FiCalendar: FiCalendar,
  FiKey: FiKey,
  FiStar: FiStar,
  FiClock: FiClock,
  FiAlertCircle: FiAlertCircle,
};

const Dashboard = ({ isDarkMode }) => {
  const getIconComponent = (
    iconName,
    size = 24,
    colorClass = ""
  ) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? (
      <IconComponent size={size} className={colorClass} />
    ) : null;
  };

  return (
    <div
      className={`p-6 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">
        Property Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 shadow-md ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-3 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                {getIconComponent(card.icon)}
              </div>
              <div
                className={`text-sm font-medium flex items-center ${
                  card.trend === "up"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {card.trend === "up" ? (
                  <FiTrendingUp className="mr-1" />
                ) : (
                  <FiTrendingDown className="mr-1" />
                )}
                {card.change}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">
              {card.value}
            </h3>
            <p
              className={`text-sm ${
                isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              {card.title}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div
          className={`rounded-lg p-6 shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">
            Monthly Revenue
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={
                    isDarkMode ? "#4B5563" : "#E5E7EB"
                  }
                />
                <XAxis
                  dataKey="month"
                  stroke={
                    isDarkMode ? "#9CA3AF" : "#6B7280"
                  }
                />
                <YAxis
                  stroke={
                    isDarkMode ? "#9CA3AF" : "#6B7280"
                  }
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode
                      ? "#374151"
                      : "#FFFFFF",
                    borderColor: isDarkMode
                      ? "#4B5563"
                      : "#E5E7EB",
                    color: isDarkMode
                      ? "#FFFFFF"
                      : "#111827",
                  }}
                  formatter={(value) => [
                    `$${value}`,
                    "Revenue",
                  ]}
                />
                <Legend />
                <Bar
                  dataKey="revenue"
                  fill="#487fff"
                  name="Revenue ($)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className={`rounded-lg p-6 shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">
            Property Portfolio
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={propertyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(
                      0
                    )}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {propertyData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        PROPERTY_COLORS[
                          index % PROPERTY_COLORS.length
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode
                      ? "#374151"
                      : "#FFFFFF",
                    borderColor: isDarkMode
                      ? "#4B5563"
                      : "#E5E7EB",
                    color: isDarkMode
                      ? "#FFFFFF"
                      : "#111827",
                  }}
                  formatter={(value) => [
                    `${value}%`,
                    "Percentage",
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div
          className={`rounded-lg p-6 shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {activityData.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    {getIconComponent(
                      activity.icon,
                      20,
                      activity.iconColor
                    )}
                  </div>
                  <div>
                    <p className="font-medium">
                      {activity.property}
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {activity.action}
                    </p>
                  </div>
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`rounded-lg p-6 shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">
            Top Performing Properties
          </h2>
          <div className="space-y-4">
            {topProperties.map((property, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center">
                  <div
                    className={`mr-4 p-2 rounded-full ${
                      isDarkMode
                        ? "bg-gray-700"
                        : "bg-gray-100"
                    }`}
                  >
                    <FiStar className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {property.name}
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      Occupancy: {property.occupancy}
                    </p>
                  </div>
                </div>
                <div
                  className={`font-semibold ${
                    isDarkMode
                      ? "text-blue-400"
                      : "text-blue-600"
                  }`}
                >
                  {property.revenue}/mo
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
