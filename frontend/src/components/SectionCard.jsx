import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionCard = ({ 
  id,
  icon, 
  title, 
  subtitle,
  description,
  topicsCount
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id === 'dsa-python') {
      navigate('/courses/dsa-python');
    } else if (id === 'web-dev') {
      navigate('/courses/web-development');
    } else {
      navigate(`/courses/${id}`);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`
        bg-white dark:bg-slate-800
        border-2 border-gray-200 dark:border-slate-700
        rounded-xl p-6
        shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:-translate-y-3
        hover:border-blue-400 dark:hover:border-blue-500
        cursor-pointer
        flex flex-col h-full
        group
      `}
    >
      {/* Icon */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-2">
        {description}
      </p>

      {/* Topics Count */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          {topicsCount} Topics
        </span>
        <span className="text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  );
};

export default SectionCard;
