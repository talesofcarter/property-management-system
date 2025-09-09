import React, { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiPauseCircle,
  FiCalendar,
  FiDollarSign,
  FiUsers,
  FiHome,
  FiTrendingUp,
} from "react-icons/fi";
import {
  projectsData,
  statusOptions,
  priorityOptions,
} from "../components/data/projectsData.js";

const Projects = ({ isDarkMode }) => {
  const [projects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] =
    useState("All");

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ||
      project.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All" ||
      project.priority === priorityFilter;

    return (
      matchesSearch && matchesStatus && matchesPriority
    );
  });

  // Get status icon and color
  const getStatusInfo = (status) => {
    switch (status) {
      case "In Progress":
        return {
          icon: <FiTrendingUp />,
          color: "text-blue-500",
          bgColor: "bg-blue-500/10",
        };
      case "Completed":
        return {
          icon: <FiCheckCircle />,
          color: "text-green-500",
          bgColor: "bg-green-500/10",
        };
      case "On Hold":
        return {
          icon: <FiPauseCircle />,
          color: "text-amber-500",
          bgColor: "bg-amber-500/10",
        };
      case "Planning":
        return {
          icon: <FiClock />,
          color: "text-purple-500",
          bgColor: "bg-purple-500/10",
        };
      default:
        return {
          icon: <FiAlertCircle />,
          color: "text-gray-500",
          bgColor: "bg-gray-500/10",
        };
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  };

  return (
    <div
      className={`p-6 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">
            Property Projects
          </h1>
          <p
            className={`mt-1 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Manage your property portfolio and renovations
          </p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <FiPlus className="mr-2" />
          New Project
        </button>
      </div>

      {/* Filters */}
      <div
        className={`p-4 rounded-lg mb-8 ${
          isDarkMode ? "bg-gray-800" : "bg-white border"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value)
            }
            className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            {priorityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const statusInfo = getStatusInfo(project.status);

          return (
            <div
              key={project.id}
              className={`rounded-xl p-5 transition-all hover:shadow-lg ${
                isDarkMode
                  ? "bg-gray-800"
                  : "bg-white border"
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiHome className="mr-1" />
                    <span>{project.propertyType}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <FiEdit className="text-gray-500" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <FiTrash2 className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Status and Priority */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.priority === "High"
                      ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      : project.priority === "Medium"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {project.priority}
                </span>
                <div
                  className={`flex items-center px-3 py-1 rounded-full text-xs ${statusInfo.bgColor} ${statusInfo.color}`}
                >
                  {statusInfo.icon}
                  <span className="ml-1.5">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">
                    Progress
                  </span>
                  <span className="font-medium">
                    {project.progress}%
                  </span>
                </div>
                <div
                  className={`w-full h-2 rounded-full ${
                    isDarkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Due Date
                  </span>
                  <span className="font-medium">
                    {formatDate(project.endDate)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Budget
                  </span>
                  <span className="font-medium">
                    {project.spent} / {project.budget}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Team
                  </span>
                  <span className="font-medium">
                    {project.teamMembers} members
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div
          className={`text-center py-16 rounded-xl ${
            isDarkMode ? "bg-gray-800" : "bg-white border"
          }`}
        >
          <FiFilter className="mx-auto text-3xl text-gray-400 mb-3" />
          <h3 className="text-lg font-medium mb-1">
            No projects found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
