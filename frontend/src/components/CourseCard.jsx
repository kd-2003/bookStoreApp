import React from 'react';

const CourseCard = ({ 
  icon, 
  title, 
  description, 
  buttonLabel = "Start Learning",
  theme = "blue"
}) => {
  // Define color themes for different sections
  const themeColors = {
    blue: {
      bg: "bg-blue-50 dark:bg-slate-800",
      border: "border-blue-200 dark:border-blue-700",
      button: "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
      text: "text-blue-700 dark:text-blue-300"
    },
    green: {
      bg: "bg-green-50 dark:bg-slate-800",
      border: "border-green-200 dark:border-green-700",
      button: "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
      text: "text-green-700 dark:text-green-300"
    },
    purple: {
      bg: "bg-purple-50 dark:bg-slate-800",
      border: "border-purple-200 dark:border-purple-700",
      button: "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700",
      text: "text-purple-700 dark:text-purple-300"
    },
    orange: {
      bg: "bg-orange-50 dark:bg-slate-800",
      border: "border-orange-200 dark:border-orange-700",
      button: "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700",
      text: "text-orange-700 dark:text-orange-300"
    },
    pink: {
      bg: "bg-pink-50 dark:bg-slate-800",
      border: "border-pink-200 dark:border-pink-700",
      button: "bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700",
      text: "text-pink-700 dark:text-pink-300"
    },
    indigo: {
      bg: "bg-indigo-50 dark:bg-slate-800",
      border: "border-indigo-200 dark:border-indigo-700",
      button: "bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700",
      text: "text-indigo-700 dark:text-indigo-300"
    }
  };

  const colors = themeColors[theme] || themeColors.blue;

  return (
    <div 
      className={`
        ${colors.bg} ${colors.border}
        border rounded-lg p-6 h-full
        shadow-md hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:-translate-y-2
        cursor-pointer
        flex flex-col
      `}
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
        {description}
      </p>

      {/* Button */}
      <button
        className={`
          ${colors.button}
          text-white font-semibold py-2 px-4 rounded-lg
          transition-all duration-200
          hover:shadow-lg active:scale-95
          self-start
        `}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default CourseCard;
