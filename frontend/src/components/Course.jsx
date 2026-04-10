import React, { useState } from 'react';
import SectionCard from './SectionCard';
import { courseSectionsData } from '../data/coursesData';

const Course = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter sections based on search
  const filteredSections = courseSectionsData.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn and grow with our comprehensive collection of courses across various domains.
            Click on any course to explore topics and start your learning journey!
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* Sections Grid */}
        {filteredSections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSections.map((section) => (
              <SectionCard
                key={section.id}
                id={section.id}
                icon={section.icon}
                title={section.title}
                subtitle={section.subtitle}
                description={section.description}
                topicsCount={section.topics.length}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No courses found matching your search.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Skills?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of learners already mastering in-demand skills with our expert-led courses.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg active:scale-95">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
