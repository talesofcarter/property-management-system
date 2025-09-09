import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCamera,
  FiSave,
  FiEdit,
  FiLock,
  FiBell,
  FiShield,
} from "react-icons/fi";

const Profile = ({ isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@residaa.com",
    phone: "+1 (555) 123-4567",
    address: "123 Property Manager Ave, New York, NY 10001",
    position: "Senior Property Manager",
    bio: "Experienced property manager with over 8 years in residential and commercial real estate management. Specialized in tenant relations and property maintenance.",
    avatar: "/images/circle-user.svg",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    maintenanceAlerts: true,
    paymentReminders: true,
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
    console.log("Saved:", userData);
  };

  return (
    <div
      className={`p-6 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">
            Profile Settings
          </h1>
          <p
            className={`mt-1 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Manage your account settings and preferences
          </p>
        </div>
        {isEditing ? (
          <button
            onClick={handleSave}
            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
          >
            <FiSave className="mr-2" />
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
          >
            <FiEdit className="mr-2" />
            Edit Profile
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div
          className={`lg:col-span-2 rounded-xl p-6 ${
            isDarkMode ? "bg-gray-800" : "bg-white border"
          }`}
        >
          <h2 className="text-xl font-semibold mb-6">
            Personal Information
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {userData.avatar ? (
                    <img
                      src={userData.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FiUser className="text-3xl text-gray-400" />
                  )}
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600">
                    <FiCamera className="text-sm" />
                    <input type="file" className="hidden" />
                  </label>
                )}
              </div>
              <span className="text-sm text-gray-500">
                Supported formats: JPG, PNG
              </span>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-50 border-gray-300"
                  } ${!isEditing && "opacity-70"}`}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-300"
                    } ${!isEditing && "opacity-70"}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                Phone Number
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-50 border-gray-300"
                  } ${!isEditing && "opacity-70"}`}
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                Position
              </label>
              <input
                type="text"
                name="position"
                value={userData.position}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-gray-50 border-gray-300"
                } ${!isEditing && "opacity-70"}`}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className={`block text-sm font-medium mb-2 ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Address
            </label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows={2}
                className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-gray-50 border-gray-300"
                } ${!isEditing && "opacity-70"}`}
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Bio
            </label>
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-gray-50 border-gray-300"
              } ${!isEditing && "opacity-70"}`}
            />
          </div>
        </div>

        {/* Preferences Card */}
        <div
          className={`rounded-xl p-6 ${
            isDarkMode ? "bg-gray-800" : "bg-white border"
          }`}
        >
          <h2 className="text-xl font-semibold mb-6">
            Preferences
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4 flex items-center">
                <FiBell className="mr-2 text-blue-500" />
                Notifications
              </h3>
              <div className="space-y-3">
                {Object.entries(preferences).map(
                  ([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name={key}
                        checked={value}
                        onChange={handlePreferenceChange}
                        className="rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="ml-3 text-sm">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) =>
                            str.toUpperCase()
                          )}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-medium mb-4 flex items-center">
                <FiShield className="mr-2 text-blue-500" />
                Security
              </h3>
              <button
                className={`w-full flex items-center justify-between p-4 rounded-lg cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-100 hover:bg-gray-200"
                } transition-colors`}
              >
                <span className="text-sm">
                  Change Password
                </span>
                <FiLock className="text-gray-400" />
              </button>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-medium mb-4">Account</h3>
              <button className="w-full text-[var(--primary-color)] text-sm text-left p-2 hover:bg-blue-200 dark:hover:bg-red-900/20 rounded-lg transition-colors cursor-pointer">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
