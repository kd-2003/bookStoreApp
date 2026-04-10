import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBook, FaCode, FaLightbulb } from 'react-icons/fa';

const AccordionItem = ({ title, description, subtopics, theoryContent, isOpen, onToggle, index }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaBook size={14} /> },
    { id: 'theory', label: 'Theory', icon: <FaBook size={14} /> },
    { id: 'code', label: 'Code Examples', icon: <FaCode size={14} /> },
    { id: 'tips', label: 'Interview Tips', icon: <FaLightbulb size={14} /> }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border-2 border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
      >
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {index + 1}. {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 text-gray-500 dark:text-gray-400"
        >
          <FaChevronDown size={20} />
        </motion.div>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-gray-200 dark:border-slate-700"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-slate-800'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 bg-white dark:bg-slate-800 max-h-96 overflow-y-auto">
              {activeTab === 'overview' && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    📋 What You'll Learn:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {subtopics.map((subtopic, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: subIndex * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg shadow-sm"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                          {subtopic}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'theory' && theoryContent && (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: theoryContent }} />
                </div>
              )}

              {activeTab === 'code' && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    💻 Code Examples Coming Soon
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Interactive code examples and practice problems will be available here.
                  </p>
                </div>
              )}

              {activeTab === 'tips' && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    🎯 Interview Tips Coming Soon
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Common interview questions and tips for this topic will be available here.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;